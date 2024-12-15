import UserDataProcessor from "../services/UserDataProcessor.js";
import AdminService from "../services/AdminService.js";
import User from "../models/User.js";
import AuthService from "../services/AuthService.js";
import UserRepository from "../repositories/UserRepository.js";
import UserCreationRepository from "../repositories/UserCreationRepository.js";
import PasswordResetService from "../services/PasswordResetService.js";

const createUser = async (req, res) => {
  try {
    const userPackage = await UserDataProcessor.processUserData(req.body);

    // Contar administradores en el controlador o en un servicio que puede interactuar con la DB
    const userCreationRepository = new UserCreationRepository(User);
    const adminCount = await userCreationRepository.countAdmins();

    // Llamada al servicio AdminService para asignar el rol
    const userWithRole = AdminService.assignRole(userPackage, adminCount);

    const newUser = await userCreationRepository.createUser(userWithRole);

    return res
      .status(201)
      .send(
        `Usuario creado con éxito, bienvenid@ a tu tienda Del Carajo! ${newUser.name} `
      );
  } catch (error) {
    console.error(
      `Response on createUser function authController , type: ${error}`
    );
    return res
      .status(500)
      .json({ error: "An error occurred while creating the use" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Inyeccion de dependencias
    const userRepository = new UserRepository(User);
    //Inyeccion del repositorio al servicio
    const authService = new AuthService(userRepository);
    //Validacion de usuario
    const dataUser = await authService.validateUser(email, password);
    const token = await authService.generateToken(dataUser);

    return res.status(200).json({
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
    console.error(`Error en la función loginController: ${error.message}`);

    return res
      .status(401)
      .json({ error: error.message || "Error al iniciar sesión" });
  }
};

const refreshToken = async (req, res) => {
  try {
    const newAccessToken = res.locals.newAccessToken;
    if (!newAccessToken) {
      return res.status(500).json({ error: "Failed to refresh token" });
    }
    return res.status(200).json({
      message: "Access token refreshed successfully",
      newAccessToken: newAccessToken,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error refreshing token" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(`Error en logout: ${error.message}`);
    return res.status(500).json({ error: "An error occurred during logout" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const userRepository = new UserRepository(User);
    const passwordResetService = new PasswordResetService(userRepository);

    await passwordResetService.sendResetEmail(email);

    return res.status(200).json({
      message:
        "Si el correo es válido, se ha enviado un enlace de restablecimiento.",
    });
  } catch (error) {
    console.error(`Error en el forgotPassword: ${error.message}`);
    return res
      .status(500)
      .json({ erros: "Hubo un error al procesar la soilicitud" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const userRepository = new UserRepository(User);
    const passwordResetService = new PasswordResetService(userRepository);

    // Llamamos al servicio para restablecer la contraseña
    await passwordResetService.resetPassword(token, newPassword);

    return res
      .status(200)
      .json({ message: "Contraseña actualizada con éxito" });
  } catch (error) {
    console.error(`Error en la función resetPassword: ${error.message}`);
    return res
      .status(500)
      .json({ error: "Hubo un error al restablecer la contraseña" });
  }
};

export default {
  createUser,
  login,
  refreshToken,
  logout,
  forgotPassword,
  resetPassword,
};
