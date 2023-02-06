import { Request, Response } from 'express';
import { WriteOdsFileService } from '../services/WriteOdsFileService.js';
import { UploadCadastrosService } from '../services/UploadCadastrosService.js';
import { DeleteOdsFileService } from '../services/DeleteOdsFileService.js';

class UploadCadastrosController {
  static async handler(request: Request, response: Response) {
    const writeOdsFileService = new WriteOdsFileService();
    const uploadCadastrosService = new UploadCadastrosService();
    const deleteOdsFileService = new DeleteOdsFileService();

    const fileId = await writeOdsFileService.execute(request.body.base64);
    await uploadCadastrosService.execute(fileId);
    deleteOdsFileService.execute(fileId);

    return response.status(200).send();
  }
}

export { UploadCadastrosController };
