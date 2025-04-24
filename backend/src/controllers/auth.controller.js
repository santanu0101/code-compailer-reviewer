import { Auth } from "../models/auth.model.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// .......... sendOTP ............
const sendOTP = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "email is required" });
  }

  const otp = generateOTP();
  //   console.log(otp);
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

  await Auth.findOneAndUpdate(
    { email },
    { otp, otpExpires },
    {
      upsert: true,
      new: true,
    }
  );

  await transporter.sendMail({
    to: email,
    subject: "Login Verification Code",
    text: ` Hello! Your login verification code is ${otp}. It will expire in 10 minutes`,
  });

  res.status(200).json({ message: "OTP sent" });
};

// .......... verifyOTP ............
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  const user = await Auth.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpires < new Date()) {
    return res.status(400).json({ error: "Invalid or expired OTP" });
  }
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  user.token = token;
  (user.otp = undefined), (user.otpExpires = undefined), await user.save();

  const options = {
    httpOnly: true,
    secure: true,
  };

  res.status(200).cookie("token", token, options).json({ token });
};

const userLogout = async (req, res) => {
  if (!req.user || !req.user.email) {
    return res.status(400).json({ error: "No user found" });
  }

  await Auth.findOneAndUpdate(
    req.user.email,
    {
      $unset: {
        token: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .clearCookie("token", options)
    .json({ message: "User logged out" });
};

export { sendOTP, verifyOTP, userLogout };
