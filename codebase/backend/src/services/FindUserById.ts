import { UserRepository } from '../repositories/UserRepository.js';

export class FindUserById {
  async execute(id: string) {
    const userRepository = new UserRepository();

    return await userRepository.findUserById(id);
  }
}
