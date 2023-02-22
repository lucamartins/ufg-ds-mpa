import { Request, Response, NextFunction } from 'express';
import { UploadVhceService } from '../services/UploadVhceService.js';
import { WriteOdsFileService } from '../services/WriteOdsFileService.js';
import { VerifyProcessId } from '../services/VerifyProcessId.js';
import { DeleteOdsFileService } from '../services/DeleteOdsFileService.js';
import { AlterProcessStep } from '../services/AlterProcessStep.js';

class UploadNotasVhceController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const verifyProcessId = new VerifyProcessId();
    const alterProcessStep = new AlterProcessStep();
    const uploadVhceService = new UploadVhceService();
    const writeOdsFileService = new WriteOdsFileService();
    const deleteOdsFileService = new DeleteOdsFileService();

    const { base64, processID } = request.body;

    // writing ods file and registering its id
    const fileId = await writeOdsFileService.execute(base64);

    try {
      // verify processID validity
      await verifyProcessId.execute(processID);

      // upload notas vhce table
      await uploadVhceService.execute(fileId, processID);
      
      // update process step
      const processData = await alterProcessStep.execute(4, processID);

      return response.status(200).json({
        message: 'NotasVhce table updated'
      });
    } catch (err) {
      next(err);
    } finally {
      deleteOdsFileService.execute(fileId);
    }
  }
}

export { UploadNotasVhceController };
