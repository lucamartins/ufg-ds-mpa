import { ProcessosSeletivosRepository } from '../repositories/ProcessosSeletivosRepository.js';
import { ApiErrors } from '../errors/apiErrors.js';

export class VerifyProcessId {
  async execute(processID: string) {
    const processosSeletivosRepositor = new ProcessosSeletivosRepository();

    const response = await processosSeletivosRepositor.searchProcessId(processID);
    
    if (!response) {
      throw new ApiErrors(400, 'there is no process registered with the provided id');
    }

    return;
  }
}
