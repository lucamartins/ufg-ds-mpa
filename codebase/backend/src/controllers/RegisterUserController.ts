import { Request, Response, NextFunction } from 'express';
import { RegisterUserService } from '../services/RegisterUserService.js';
import { ApiErrors } from '../errors/apiErrors.js';

class RegisterUserController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const registerUserService = new RegisterUserService();

    const { email, password, name } = request.body;

    try {
      if (!email || !password || !name)
        throw new ApiErrors(400, 'required atribute is missing');

      const registerServiceResponse = await registerUserService.execute(email, password, name);

      return response.status(200).json(registerServiceResponse);
    } catch (err) {
      next(err);
    }
  }
}

export { RegisterUserController };
