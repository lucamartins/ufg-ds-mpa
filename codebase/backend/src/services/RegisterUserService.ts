import { UserRepository } from '../repositories/UserRepository.js';
import { ApiErrors } from '../errors/apiErrors.js';

export class RegisterUserService {
  async execute(email: string, password: string, name: string) {
    const userRepository = new UserRepository();

    const emailIsInUse = await userRepository.checkEmailAvailability(email);

    if (emailIsInUse)
      throw new ApiErrors(406, 'email is already in use');

    return userRepository.registerUser(email, password, name);
  }
}
