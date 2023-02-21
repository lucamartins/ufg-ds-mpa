import { UserRepository } from '../repositories/UserRepository.js';

export class ListProcessCpfsService {
  async execute(processID: string) {
    const userRepository = new UserRepository();
    return await userRepository.getProcessCps(processID);
  }
}
