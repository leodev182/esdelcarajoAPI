class UserRepository {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }
  async getUserByEmail(email) {
    try {
      return await this.UserModel.findOne({ where: { email } });
    } catch (error) {
      throw new Error("Error al obtener el usuario");
    }
  }
  async updateUserResetPassword(user, resetToken, resetTokenExpires) {
    try {
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = resetTokenExpires;
      await user.save();
    } catch (error) {
      throw new Error("Error al actualizar el token de restablecimiento");
    }
  }

  async getUserByResetToken(token) {
    try {
      return await this.UserModel.findOne({
        where: { resetPasswordToken: token },
      });
    } catch (error) {
      throw new Error(
        "Error al obtener el usuario por token de restablecimiento"
      );
    }
  }
  async updateUserResetPassword(user, token, expiration) {
    user.resetPasswordToken = token;
    user.resetPasswordExpires = expiration;
    return await user.save();
  }

  async saveUser(user) {
    return await user.save();
  }
}

export default UserRepository;
