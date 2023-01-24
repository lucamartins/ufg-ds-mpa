-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('M', 'F');

-- CreateTable
CREATE TABLE "Cadastro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "num_estado_civil" INTEGER NOT NULL,

    CONSTRAINT "Cadastro_pkey" PRIMARY KEY ("id")
);
