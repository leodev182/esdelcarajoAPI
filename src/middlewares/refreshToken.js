import jwt from "jsonwebtoken";
import UserRepository from "../repositories/UserRepository.js";
import dotenv from "dotenv";
dotenv.config();

const refreshToken = async (req, res, netx) => {
  const tokenRenew = req.body.refreshToken || req.headers["x-refresh-token"];

  if (!tokenRenew) {
    return res.status(403).json({ error: "Refresh Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(tokenRenew);
  } catch (error) {}
};
