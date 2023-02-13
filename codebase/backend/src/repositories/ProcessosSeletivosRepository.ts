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
}
