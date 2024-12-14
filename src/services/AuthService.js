import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async validateUser(email, password) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("Contraseña incorrecta");
    }

    return user;
  }

  async generateToken(user) {
    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role,
      nickname: user.nickname,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return token;
  }
}

export default AuthService;
