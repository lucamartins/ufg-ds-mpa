import { Request, Response, NextFunction } from 'express';
import { ListProcessCpfsService } from '../services/ListProcessCpfsService.js';
import fs from 'fs';
import { resolve } from 'path';

class ListProcessCpfsController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const listProcessCpfsService = new ListProcessCpfsService();

    const { processID } = request.body;

    try {
      const res = await listProcessCpfsService.execute(processID);

      var cpfs = '';

      for (var i = 0; i < res.length; i++) {
        cpfs = cpfs.concat(res[i].cpf, ',');
      }
      
      fs.writeFileSync(`./src/tmp/${processID}.txt`, cpfs);
      const file = resolve(`./src/tmp/${processID}.txt`);

      return response.download(file, `${processID}.txt` , () => {
        fs.unlink(`./src/tmp/${processID}.txt`, () => {});
      });
    } catch (err) {
      next(err);
    }
  }
}

export { ListProcessCpfsController }
