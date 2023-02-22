import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../utils/hashPassword.js';

const prisma = new PrismaClient();

export class UserRepository {
  async findByEmailAndPassword(email: string, password: string) {
    return await prisma.usuarios.findFirst({ 
      where: {
        email: email,
        password: hashPassword(password)
      },
      select: {
        email: true,
        nome: true,
        role: true
      }
    });
  }

  async registerUser(email: string, password: string, name: string) { 
    return await prisma.usuarios.create({ 
      data: {
        email: email,
        nome: name,
        password: hashPassword(password),
        role: 'ANALYST'
      },
      select: {
        email: true,
        nome: true
      }
    });
  }

  async checkEmailAvailability(email: string) {
    const res = await prisma.usuarios.findFirst({
      where: {
        email: email
      }
    });

    if (res) 
      return true;
    
    return false;
  }

  async listAnalystUsers() {
    return await prisma.usuarios.findMany({
      where: {
        role: 'ANALYST'
      },
      select: {
        id: true,
        nome: true,
        email: true,
      }
    });
  }

  async deleteUser(id: string) {
    return await prisma.usuarios.delete({
      where: {
        id: id
      }
    });
  }

  async findUserById(id: string) {
    return await prisma.usuarios.findFirst({
      where: {
        id: id
      }
    })
  }

  async getProcessCps(processID: string) {
    return await prisma.candidatos.findMany({
      where: {
        processoSeletivoId: processID
      },
      select: {
        cpf: true
      }
    });
  }

  async getVhceCpfs(processID: string) {
    return await prisma.candidatos.findMany({
      where: {
        processoSeletivoId: processID,
        cargoId: 85
      },
      select: {
        cpf: true
      }
    });
  }

  async getProcessUsers(processID: string) {
    return await prisma.candidatos.findMany({
      where: {
        processoSeletivoId: processID
      }
    });
  }
}
