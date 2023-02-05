import { Request, Response } from 'express';
import { LoginService } from '../services/LoginService.js';
import jwt from 'jsonwebtoken';

interface User {
  email: string,
  nome: string,
  token?: string
}

class LoginController {
  static async handler(request: Request, response: Response) {
    const loginService = new LoginService();

    const { email, password } = request.body;

    const user:User = await loginService.execute(email, password);
    const token = jwt.sign({ email: user.email }, process.env.PRIVATE_KEY, { expiresIn: 3000 });

    user.token = token;

    return response.status(200).json(user);
  }
}

export { LoginController };
