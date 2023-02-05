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
        nome: true
      }
    });
  }

  async registerUser(email: string, password: string, name: string) { 
    return await prisma.usuarios.create({ 
      data: {
        email: email,
        nome: name,
        password: hashPassword(password)
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
}
