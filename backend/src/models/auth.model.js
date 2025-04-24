import mongoose, { Schema } from "mongoose";

const authSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },

    otp: {
      type: String,
    },

    otpExpires: {
      type: Date,
    },

    token: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Auth = mongoose.model("Auth", authSchema);
