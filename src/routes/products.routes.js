import express from "express";
// import {
//   createProduct,
//   getProducts,
//   getProductById,
//   alterProductById,
//   deleteProductById,
// } from "../controllers/productController.js";
// import { authenticateToken } from "../middlewares/authenticateToken.js";
// import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Ruta para obtener todos los productos (acceso público)
// router.get("/", getProducts);

// Ruta para obtener un producto por ID (acceso público)
// router.get("/:id", getProductById);

// Ruta para crear un nuevo producto (acceso solo para administradores)
// router.post("/", authenticateToken, adminMiddleware, createProduct);

// Ruta para modificar un producto por ID (acceso solo para administradores)
// router.patch("/:id", authenticateToken, adminMiddleware, alterProductById);

// Ruta para eliminar un producto por ID (acceso solo para administradores)
// router.delete("/:id", authenticateToken, adminMiddleware, deleteProductById);

export default router;
