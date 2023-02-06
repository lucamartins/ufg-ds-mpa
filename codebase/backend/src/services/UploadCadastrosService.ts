import { spawn } from 'child_process';
import { resolve as pathResolve } from 'path';

export class UploadCadastrosService {
  async execute(fileId: string) {

    return new Promise((resolve, reject) => {
      const process = spawn('python3', [`${pathResolve('.')}/src/scripts/cadastros.py`, fileId]);
  
      process.stdout.on('data', function(data) {
        console.log(data.toString());
      });
  
      process.stderr.on('data', data => {
        console.log('err:', data.toString());
      });
  
      process.on('exit', code => {
        if (code === 0)
          resolve(code);

        reject(code);
      });
    })

  }
}
