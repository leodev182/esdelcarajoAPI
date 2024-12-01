import express from "express";
// import {
//   getUserProfile,
//   getUserProfileById,
//   deleteUserById,
// } from "../controllers/userController.js";
// import { authenticateToken } from "../middlewares/authenticateToken.js";
// import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Ruta para obtener el perfil del usuario (solo accesible si está autenticado)
// router.get("/profile", authenticateToken, getUserProfile);

// Ruta para modificar el perfil del usuario (solo accesible si está autenticado)
// router.patch("/profile/edit/:id", authenticateToken, getUserProfileById);

// Ruta para eliminar el perfil de un usuario (solo accesible para administradores)
// router.delete("/user/:id", authenticateToken, adminMiddleware, deleteUserById);

export default router;
