import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  role: string
}

export function validateAdminAuthentication(request: Request, response: Response, next: NextFunction) {
  //Receber o token
  const bearerHeader = request.headers.authorization as string;
  const authToken = bearerHeader.split(' ')[1];

  //Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).json({ message: 'token invalido' });
  }

  try {
    const { role } = verify(authToken, process.env.PRIVATE_KEY) as IPayload;

    if (role !== 'ADMIN') {
      return response.status(401).json({ message: 'usuário não é administrador' });
    }

    return next();
  } catch (err) {
    return response.status(401).json({ message: 'token invalido' });
  }
}
