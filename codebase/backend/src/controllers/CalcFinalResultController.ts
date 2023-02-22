import { Request, Response, NextFunction } from 'express';
import { CalcFinalResultService } from '../services/CalcFinalResultService.js';

class CalcFinalResultController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const calcFinalResultService = new CalcFinalResultService();

    const { processID } = request.body;

    const resultados = await calcFinalResultService.execute(processID);

    return response.status(200).json(resultados);
  }
}

export { CalcFinalResultController }
