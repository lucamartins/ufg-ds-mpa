import { UserRepository } from '../repositories/UserRepository.js';

export class DeleteUserService {
  async execute(id: string) {
    const userRepository = new UserRepository();

    return await userRepository.deleteUser(id);
  }
}
