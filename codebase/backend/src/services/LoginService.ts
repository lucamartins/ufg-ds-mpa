import { UserRepository } from '../repositories/UserRepository.js';
import { ApiErrors } from '../errors/apiErrors.js';

export class LoginService {
  async execute(email: string, password: string) {
    const userRepository = new UserRepository();

    const user = await userRepository.findByEmailAndPassword(email, password);

    if (!user)
      throw new ApiErrors(400, 'wrong email or password');

    return user;
  }
}
