import UserDataProcessor from "../services/UserDataProcessor.js";
import AdminService from "../services/AdminService.js";
import User from "../models/User.js";

const createUser = async (req, res) => {
  try {
    const userPackage = await UserDataProcessor.processUserData(req.body);

    // Llamada al servicio AdminService para asignar el rol de admin o user
    const adminCount = await User.count({ where: { role: "admin" } }); // Obtener el conteo de administradores desde la base de datos
    let userWithRole;

    if (adminCount < 3) {
      userWithRole = AdminService.assignAdminRole(userPackage, adminCount);
    } else {
      // Si ya hay tres administradores, asignamos el rol de user
      userWithRole = AdminService.assignUserRole(userPackage);
    }

    const newUser = await User.create(userWithRole);

    console.log(newUser);
    res
      .status(201)
      .send(`Usuario creado con éxito, bienvenido ${newUser.user} `);
  } catch (error) {
    console.error(`Response controllersRoutes module, type: ${error}`);
    res.send(`Error on response controllersRoutes module`);
  }
};

const logIn = async (req, res) => {
  try {
    const { dataUser } = req;
    console.log(dataUser);
  } catch (error) {}
};

const refreshToken = async (req, res) => {};

const logOut = async (req, res) => {};

const forgotPassword = async (req, res) => {};

const resetPassword = async (req, res) => {};

export default { createUser };
