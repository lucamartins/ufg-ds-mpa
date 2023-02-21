import { UserRepository } from '../repositories/UserRepository.js';

export class ListVhceCpfsService {
  async execute(processID: string) {
    const userRepository = new UserRepository();
    return await userRepository.getVhceCpfs(processID);
  }
}
