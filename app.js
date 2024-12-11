import express from "express";
import cors from "cors";
import usersRoutes from "./src/routes/user.routes.js";
import productsRoutes from "./src/routes/products.routes.js";
import auth from "./src/routes/auth.routes.js";

const app = express();

//Middlewares

app.use(express.json());
app.use(cors());

//Rutas
app.use("/v1/", auth);
app.use("/v1/", usersRoutes);
app.use("/v1/", productsRoutes);

//Manejo gemeral de errores

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Algo salio mal en el servidor" });
});

export default app;
