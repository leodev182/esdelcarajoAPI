import UserDataProcessor from "../services/UserDataProcessor.js";
import AdminService from "../services/AdminService.js";
import User from "../models/User.js";
import AuthService from "../services/AuthService.js";
import UserRepository from "../repositories/UserRepository.js";

const createUser = async (req, res) => {
  try {
    const userPackage = await UserDataProcessor.processUserData(req.body);

    // Contar administradores en el controlador o en un servicio que puede interactuar con la DB
    const adminCount = await User.count({ where: { role: "admin" } });

    // Llamada al servicio AdminService para asignar el rol
    const userWithRole = AdminService.assignRole(userPackage, adminCount);

    const newUser = await User.create(userWithRole);

    res
      .status(201)
      .send(`Usuario creado con éxito, bienvenid@ ${newUser.name} `);
  } catch (error) {
    console.error(
      `Response on createUser function authController , type: ${error}`
    );
    res.status(500).json({ error: "An error occurred while creating the use" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRepository = new UserRepository();
    const authService = new AuthService(userRepository);
    const dataUser = await authService.validateUser(email, password);
    const token = await authService.generateToken(dataUser);

    res.status(200).json({
      message: `Hola ${dataUser.nickname}, que bueno verte por acá`,
      token: token,
      user: {
        id: dataUser.id,
        email: dataUser.email,
        role: dataUser.role,
        nickname: dataUser.nickname,
      },
    });
  } catch (error) {
    console.error(`Response on login function authController , type: ${error}`);

    res.status(401).json({ error: error.message || "Error al iniciar sesión" });
  }
};

const refreshToken = async (req, res) => {};

const logOut = async (req, res) => {};

const forgotPassword = async (req, res) => {};

const resetPassword = async (req, res) => {};

export default { createUser, login };
