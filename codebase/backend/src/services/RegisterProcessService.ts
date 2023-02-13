import { ProcessosSeletivosRepository } from '../repositories/ProcessosSeletivosRepository.js';
import { ApiErrors } from '../errors/apiErrors.js';

export class RegisterProcessService {
  async execute(ano: number, inicio: string, termino: string) {
    const processosSeletivosRepository = new ProcessosSeletivosRepository();

    const isInUse = await processosSeletivosRepository.checkYearAvailability(ano);

    if (isInUse) 
      throw new ApiErrors(400, 'there is already a process registered in this year');

    return processosSeletivosRepository.register(ano, inicio, termino);
  }
}
