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
}

export default UserRepository;
