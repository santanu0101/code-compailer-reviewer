import jwt from "jsonwebtoken";

const verifyJWT = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized request" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(402).json({ error: "Token is not decoded properly" });
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({error: "Invalid or Expried token"})
  }
};

export { verifyJWT };