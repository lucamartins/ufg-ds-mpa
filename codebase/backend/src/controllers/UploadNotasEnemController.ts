import { Request, Response, NextFunction } from 'express';
import { WriteOdsFileService } from '../services/WriteOdsFileService.js';
import { UploadNotasEnemService } from '../services/UploadNotasEnemService.js';
import { DeleteOdsFileService } from '../services/DeleteOdsFileService.js';

class UploadNotasEnemController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const writeOdsFileService = new WriteOdsFileService();
    const uploadNotasEnemService = new UploadNotasEnemService();
    const deleteOdsFileService = new DeleteOdsFileService();

    const { base64, processID } = request.body
    const fileId = await writeOdsFileService.execute(base64);

    try {
      await uploadNotasEnemService.execute(fileId, processID);
    } catch (err) {
      next(err);
    } finally {
      deleteOdsFileService.execute(fileId);
    }

    return response.status(200).send();
  }
}

export { UploadNotasEnemController };
