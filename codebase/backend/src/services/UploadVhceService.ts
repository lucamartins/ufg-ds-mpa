import { spawn } from 'child_process';
import { resolve as pathResolve } from 'path';
import { ApiErrors } from '../errors/apiErrors.js';

export class UploadVhceService {
  async execute(fileId: string, processID: string) {
    return new Promise((resolve, reject) => {
      const process = spawn('python3', [`${pathResolve('.')}/src/scripts/notasvhce.py`, fileId, processID]);
  
      process.stdout.on('data', function(data) {
        console.log(data.toString());
      });

      process.stderr.on('data', data => {
        console.log(data.toString());
      })
  
      process.on('exit', code => {
        if (code === 0)
          resolve(code);

        const error = new ApiErrors(500, 'failed to update notasvhce')
        reject(error);
      });
    })
  }
}
