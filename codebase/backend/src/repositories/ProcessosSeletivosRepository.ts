import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProcessosSeletivosRepository {
  async listAll() {
    return await prisma.processosSeletivos.findMany();
  }
}
