import { Request, Response } from 'express';
import { ListCadastroService } from '../services/ListCadastrosService.js';

class ListCadastrosController {
  static async handler(request: Request, response: Response) {
    const listCadastrosService = new ListCadastroService();

    const cadastrosList = await listCadastrosService.execute();

    return response.status(200).json({ cadastrosList });
  }
}

export { ListCadastrosController };
