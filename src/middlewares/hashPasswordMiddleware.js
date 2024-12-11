import bcrypt from "bcryptjs";

const hashPasswordMiddleware = async (req, res, next) => {
  try {
    if (req.body.password) {
      const saltRounds = 10;
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Error al encriptar la contraseña." });
  }
};

export default hashPasswordMiddleware;
