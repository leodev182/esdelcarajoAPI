import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRATION } from "../../config/config.js";

const refreshTokenMiddleware = async (req, res, netx) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(403).json({ error: "No refresh token found" });
  }

  try {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);

    const newAccessToken = jwt.sign(
      {
        id: decoded.id,
        email: decoded.email,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION }
    );

    res.locals.newAccessToken = newAccessToken;
    return netx();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired refresh token" });
  }
};

export default refreshTokenMiddleware;
