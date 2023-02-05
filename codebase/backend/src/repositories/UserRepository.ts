import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export class UserRepository {
  async findByEmailAndPassword(email: string, password: string) {
    try {
      const hash = crypto.createHash('sha256').update(password).digest('hex');
      
      return await prisma.usuarios.findFirst({ 
        where: { email: email, password: hash },
        select: { email: true, nome: true }
      });
    } catch (err) {
      console.log(err);
    }
  }
}
