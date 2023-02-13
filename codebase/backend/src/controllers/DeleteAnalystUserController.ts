import { Request, Response, NextFunction } from 'express';
import { DeleteUserService } from '../services/DeleteUserService.js';
import { FindUserById } from '../services/FindUserById.js';
import { ApiErrors } from '../errors/apiErrors.js';

class DeleteAnalystUserController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const deleteUserService = new DeleteUserService();
    const findUserById = new FindUserById();

    const { id } = request.body;

    try {
      const user = await findUserById.execute(id);

      if (user.role === 'ADMIN')
        throw new ApiErrors(401, 'not allowed to delete an amdin user');

      await deleteUserService.execute(id);

      return response.status(200).send();
    } catch(err) {
      next(err);
    }
  }
}

export { DeleteAnalystUserController }
