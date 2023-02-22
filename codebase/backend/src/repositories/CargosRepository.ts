import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CargosRepository {
  async getCargoGroupById(cargoId: number) {
    return await prisma.cargos.findFirst({
      where: {
        codg: cargoId
      },
      select: {
        grupo: true
      }
    });
  }
}