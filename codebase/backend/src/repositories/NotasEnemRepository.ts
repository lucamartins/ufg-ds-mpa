import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class NotasEnemRepository {
  async getNotaByProcessIdAndUserCpf(processID: string, cpf: string) {
    return await prisma.notasEnem.findFirst({
      where: {
        processoSeletivoId: processID,
        candidato: {
          cpf: cpf
        }
      }
    })
  }
}