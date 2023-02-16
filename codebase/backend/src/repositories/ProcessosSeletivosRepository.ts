import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProcessosSeletivosRepository {
  async listAll() {
    return await prisma.processosSeletivos.findMany();
  }

  async register(ano: number, inicio: string, termino: string) {
    return await prisma.processosSeletivos.create({
      data: {
        ano: ano,
        inicio: inicio,
        termino: termino,
        etapa: 1
      }
    });
  }

  async checkYearAvailability(ano: number) {
    const res = await prisma.processosSeletivos.findFirst({
      where: {
        ano: ano
      }
    });

    if (res) 
      return true;
    
    return false;
  }

  async searchProcessId(processID: string) {
    return await prisma.processosSeletivos.findFirst({
      where: {
        id: processID
      }
    });
  }

  async changeProcessStep(step: number, processID: string) {
    return await prisma.processosSeletivos.update({
      where: {
        id: processID
      },
      data: {
        etapa: step
      },
      select: {
        id: true,
        ano: true,
        etapa: true,
        inicio: true,
        termino: true,
      }
    })
  }
}
