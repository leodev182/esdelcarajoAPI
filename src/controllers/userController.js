import User from "../models/User.js";
import UserRepository from "../repositories/UserRepository.js";
import UserService from "../services/UserService.js";

const getAllUsers = async (req, res) => {
  try {
    const userRepository = new UserRepository(User);
    const userService = new UserService(userRepository);
    const users = await userService.getUsers(userRepository);
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.send("CHAO PUTO");
  }
};

export default { getAllUsers };
