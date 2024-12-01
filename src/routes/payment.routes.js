import express from "express";
// import {
//   processPayment,
//   getPayment,
//   getPaymentById,
// } from "../controllers/paymentController.js";
// import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

// Ruta para procesar un pago (requiere autenticación)
// router.post("/", authenticateToken, processPayment);

// Ruta para obtener todos los pagos (requiere privilegios de administrador)
// router.get("/payments", authenticateToken, adminMiddleware, getPayment);

// Ruta para obtener un pago (requiere privilegiios de administrador)
// // router.get("/payment/:id", authenticateToken, adminMiddleware, getPaymentById);

export default router;
