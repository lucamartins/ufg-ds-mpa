import { Request, Response, NextFunction } from 'express';
import { ListProcessesService } from '../services/ListProcessesService.js';

class ListProcessesController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const listProcessesService = new ListProcessesService();

    const processes = await listProcessesService.execute();

    return response.status(200).json(processes);
  }
}

export { ListProcessesController }
