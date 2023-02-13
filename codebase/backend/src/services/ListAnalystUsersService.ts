import { UserRepository } from '../repositories/UserRepository.js';

export class ListAnalystUsersService {
  async execute() {
    const userRepository = new UserRepository();

    return await userRepository.listAnalystUsers();
  }
}
