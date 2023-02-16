import { ProcessosSeletivosRepository } from '../repositories/ProcessosSeletivosRepository.js';

export class AlterProcessStep {
  async execute(step: number, processID: string) {
    const processosSeletivosRepository = new ProcessosSeletivosRepository();

    return await processosSeletivosRepository.changeProcessStep(step, processID);
  }
}
