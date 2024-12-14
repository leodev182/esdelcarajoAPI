class UserCreationRepository {
  constructor(UserModel) {
    this.UserModel = UserModel; // Recibe el modelo User
  }

  // Método para contar administradores
  async countAdmins() {
    try {
      return await this.UserModel.count({ where: { role: "admin" } });
    } catch (error) {
      throw new Error("Error al contar los administradores.");
    }
  }

  // Método para crear un nuevo usuario
  async createUser(userData) {
    try {
      return await this.UserModel.create(userData);
    } catch (error) {
      throw new Error("Error al crear el usuario.");
    }
  }
}

export default UserCreationRepository;
