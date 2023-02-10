import { decodeBase64 } from '../utils/decodeBase64.js';
import { makeid } from '../utils/makeid.js';
import { resolve } from 'path';
import fs from 'fs';

export class WriteOdsFileService {
  async execute(base64: string) {
    const decodedData = decodeBase64(base64);
    
    const path = resolve('.');
    const randomId = makeid(7);
   
    fs.writeFileSync(`${path}/src/odsFiles/${randomId}.ods`, decodedData, { encoding: 'utf-8' });

    return randomId;
  }
}
