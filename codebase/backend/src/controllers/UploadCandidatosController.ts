import { Request, Response, NextFunction } from 'express';
import { WriteOdsFileService } from '../services/WriteOdsFileService.js';
import { UploadCandidatosService } from '../services/UploadCandidatosService.js';
import { DeleteOdsFileService } from '../services/DeleteOdsFileService.js';

class UploadCandidatosController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const writeOdsFileService = new WriteOdsFileService();
    const uploadCandidatosService = new UploadCandidatosService();
    const deleteOdsFileService = new DeleteOdsFileService();

    const { base64, processID } = request.body
    const fileId = await writeOdsFileService.execute(base64);

    try {
      await uploadCandidatosService.execute(fileId, processID); 
    } catch (err) {
      next(err);
    } finally {
      deleteOdsFileService.execute(fileId);
    }

    return response.status(200).send();
  }
}

export { UploadCandidatosController };
