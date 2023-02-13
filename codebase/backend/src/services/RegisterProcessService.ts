import { ProcessosSeletivosRepository } from '../repositories/ProcessosSeletivosRepository.js';

export class RegisterProcessService {
  async execute(ano: number, inicio: string, termino: string) {
    const processosSeletivosRepository = new ProcessosSeletivosRepository();

    return processosSeletivosRepository.register(ano, inicio, termino);
  }
}
