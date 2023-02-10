import { Request, Response, NextFunction } from 'express';
import { LoginService } from '../services/LoginService.js';
import { ApiErrors } from '../errors/apiErrors.js';
import jwt from 'jsonwebtoken';

interface User {
  email: string,
  nome: string,
  token?: string,
  role: string
}

class LoginController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const loginService = new LoginService();

    const { email, password } = request.body;

    try {
      if (!email || !password)
        throw new ApiErrors(400, 'required atribute is missing');

      const user:User = await loginService.execute(email, password);
      const token = jwt.sign({ email: user.email, role: user.role }, process.env.PRIVATE_KEY, { expiresIn: 3000 });
      user.token = token;
  
      return response.status(200).json(user);
    } catch(err) {
      next(err);
    }
  }
}

export { LoginController };
