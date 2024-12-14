import User from "../models/User.js";

class UserRepository {
  async getUserByEmail(email) {
    return await User.findOne({ where: { email } });
  }
}

export default UserRepository;
