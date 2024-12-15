class PasswordRepository {
  constructor(UserModel) {
    this.UserModel = UserModel;
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
}

export default PasswordRepository;
