import express from "express";
import { body } from "express-validator";
import authController from "../controllers/authController.js";
import hashPasswordMiddleware from "../middlewares/hashPasswordMiddleware.js";
import refreshTokenMiddleware from "../middlewares/refreshTokenMiddleware.js";

const router = express.Router();

// Ruta para registrar un usuario
router.post("/register", hashPasswordMiddleware, authController.createUser);
router.post("/login", authController.login);
router.post(
  "/refresh-token",
  refreshTokenMiddleware,
  authController.refreshToken
);

router.post("/logout", authController.logout);

router.post("/forgot-password", authController.forgotPassword);
router.put(
  "/reset-password",
  body("newPassword")
    .notEmpty()
    .withMessage("La nueva contraseña es obligatoria"),
  hashPasswordMiddleware,
  authController.resetPassword
);

export default router;
