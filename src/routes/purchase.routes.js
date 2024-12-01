import express from "express";
import {
  createPurchase,
  getUserPurchases,
} from "../controllers/purchaseController.js";
// import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

// Ruta para realizar una compra (requiere autenticación)
// router.post("/", authenticateToken, createPurchase);

// Ruta para obtener las compras del usuario (requiere autenticación)
// router.get("/history", authenticateToken, getUserPurchases);

export default router;
