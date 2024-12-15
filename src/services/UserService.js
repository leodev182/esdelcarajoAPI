class UserService {
  constructor(UserRepository) {
    this.userRepository = UserRepository;
  }

  async getUsers() {
    try {
      const users = await this.userRepository.getAllUsers();
      return users;
    } catch (error) {
      throw new Error("Error al obtener los usuarios desde el repositorio");
    }
  }
}

export default UserService;
