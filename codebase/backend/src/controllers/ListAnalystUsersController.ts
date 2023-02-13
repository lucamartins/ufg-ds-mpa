import { Request, Response, NextFunction } from 'express';
import { ListAnalystUsersService } from '../services/ListAnalystUsersService.js';

class ListAnalystUsersController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const listAnalystUsersService = new ListAnalystUsersService();

    try {
      const users = await listAnalystUsersService.execute();
      return response.status(200).json(users);
    } catch(err) {
      next(err);
    }
  }
}

export { ListAnalystUsersController }
