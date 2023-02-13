import { Request, Response, NextFunction } from 'express';
import { RegisterProcessService } from '../services/RegisterProcessService.js';
import { ApiErrors } from '../errors/apiErrors.js';

class RegisterProcessController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const registerProcessService = new RegisterProcessService();

    const { ano, inicio, termino } = request.body;

    try {
      if (!ano || !inicio || !termino)
        throw new ApiErrors(400, 'required atribute is missing');

      registerProcessService.execute(Number(ano), inicio, termino);

      return response.status(200).send();
    } catch (err) {
      next(err);
    }
  }
}

export { RegisterProcessController };
