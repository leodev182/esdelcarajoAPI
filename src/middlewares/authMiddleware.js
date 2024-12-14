import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token)
      return res.status(401).json({ error: "No se proporcionó un token" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Verificar si el usuario tiene uno de los roles permitidos
      if (roles.length && !roles.includes(req.user.role)) {
        return res
          .status(403)
          .json({ error: "No tienes acceso a este recurso" });
      }

      next();
    } catch (error) {
      return res.status(403).json({ error: "Token inválido" });
    }
  };
};

export default authMiddleware;
