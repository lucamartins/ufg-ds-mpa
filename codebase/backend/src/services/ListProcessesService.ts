import { ProcessosSeletivosRepository } from '../repositories/ProcessosSeletivosRepository.js';

export class ListProcessesService {
  async execute() {
    const processosSeletivosRepository = new ProcessosSeletivosRepository();

    return await processosSeletivosRepository.listAll();
  }
}
