import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CadastrosRepository {
  async findAll(){
    try {
      return await prisma.cadastro.findMany();
    } catch (err) {
      console.log(err);
    }
  }
}
