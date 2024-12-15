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

  async saveUser(user) {
    return await user.save();
  }

  async getAllUsers() {
    try {
      const users = await this.UserModel.findAll();
      return users;
    } catch (error) {
      throw new Error("Error al obtener los usuarios desde la base de datos");
    }
  }
}

export default UserRepository;
