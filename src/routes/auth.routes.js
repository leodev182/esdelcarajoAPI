import express from "express";
// import { registerUser, loginUser } from "../controllers/userController.js";
import authController from "../controllers/authController.js";
import hashPasswordMiddleware from "../middlewares/hashPasswordMiddleware.js";

const router = express.Router();

// Ruta para registrar un usuario
router.post("/register", hashPasswordMiddleware, authController.createUser);
router.post("/login", authController.login);

export default router;
