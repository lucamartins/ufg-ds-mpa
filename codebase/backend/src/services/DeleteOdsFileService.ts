import { resolve } from 'path';
import fs from 'fs';

export class DeleteOdsFileService {
  async execute(fileId: string) {
    
    const path = resolve('.');
   
    fs.unlink(`${path}/src/odsFiles/${fileId}.ods`, (err) => {
      if (err)
        console.log(err);
    });
  }
}
