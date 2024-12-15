import crypto from "crypto";
import nodemailer from "nodemailer";
import { EMAIL, PASSWORD_EMAIL } from "../../config/config.js";

class PasswordResetService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async sendResetEmail(email) {
    // Verificamos si el usuario existe
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Generamos un token de restablecimiento
    const resetToken = crypto.randomBytes(20).toString("hex");

    const resetTokenExpires = new Date.now() + 3600000;

    await this.userRepository.updateUserResetPassword(
      user,
      resetToken,
      resetTokenExpires
    );

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL,
        pass: PASSWORD_EMAIL,
      },
    });

    const mailOptions = {
      from: EMAIL,
      to: email,
      subject: "Solicitud de Restablecimiento de Contraseña",
      text: `Hola ${user.name},\n\nHas solicitado restablecer tu contraseña. Usa el siguiente enlace para hacerlo:\n\nhttp://tusitio.com/reset-password?token=${resetToken}\n\nSi no solicitaste este restablecimiento, ignora este mensaje.\n\nSaludos.`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Correo enviado con éxito");
    } catch (error) {
      console.error(`Error al enviar el correo: ${error.message}`);
      throw new Error("Error al enviar el correo de restablecimiento");
    }
  }
}

export default PasswordResetService;
