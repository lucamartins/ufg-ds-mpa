import { UserRepository } from '../repositories/UserRepository.js';

export class LoginService {
  async execute(email: string, password: string) {
    const userRepository = new UserRepository();
    return await userRepository.findByEmailAndPassword(email, password);
  }
}
