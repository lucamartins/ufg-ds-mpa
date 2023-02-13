import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
  email: string
}

//Verifica se o usuário está logado.
export function validateAuthentication(request: Request, response: Response, next: NextFunction) {
  //Receber o token
  const bearerHeader = request.headers.authorization as string;
  const authToken = bearerHeader.split(' ')[1];

  //Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).json({ message: 'token invalido' });
  }

  try {
    const { email } = verify(authToken, process.env.PRIVATE_KEY) as IPayload;

    //Recuperar informações do usuário.
    request.body.tokenEmail = email;

    return next();
  } catch (err) {
    return response.status(401).json({ message: 'token invalido' });
  }
}
