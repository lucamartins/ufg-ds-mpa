-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'ANALYST');

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Roles" NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargos" (
    "id" SERIAL NOT NULL,
    "coIesCurso" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "grauAcademico" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "codg" INTEGER NOT NULL,
    "vagas" INTEGER NOT NULL,
    "grupo" INTEGER NOT NULL,
    "campus" TEXT NOT NULL,

    CONSTRAINT "Cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotasEnem" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "numero" TEXT NOT NULL,
    "processoSeletivoId" UUID NOT NULL,
    "notaCienciasNatureza" DOUBLE PRECISION NOT NULL,
    "notaCienciasHumanas" DOUBLE PRECISION NOT NULL,
    "notaLinguagens" DOUBLE PRECISION NOT NULL,
    "notaMatematica" DOUBLE PRECISION NOT NULL,
    "notaRedacao" DOUBLE PRECISION NOT NULL,
    "notaTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "NotasEnem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotasVhce" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cpfCandidato" TEXT NOT NULL,
    "processoSeletivoId" UUID NOT NULL,
    "n1" INTEGER NOT NULL,
    "n2" INTEGER NOT NULL,
    "nTotal" INTEGER NOT NULL,

    CONSTRAINT "NotasVhce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programas" (
    "id" SERIAL NOT NULL,
    "codigo" INTEGER NOT NULL,
    "tipo" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "categoriaIngresso" TEXT NOT NULL,

    CONSTRAINT "Programas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidatos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cpf" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,
    "notaEnemId" UUID,
    "notaVhceId" UUID,
    "processoSeletivoId" UUID NOT NULL,
    "numCandidato" TEXT NOT NULL,
    "corRaca" INTEGER NOT NULL,
    "formacaoEscolaPublica" BOOLEAN NOT NULL,
    "dataInscricao" TIMESTAMP(3) NOT NULL,
    "programa" INTEGER NOT NULL,
    "tipoPrograma" INTEGER NOT NULL,
    "nomeComunidade" TEXT NOT NULL,
    "anoEnem" INTEGER,
    "semestreIngresso" INTEGER,

    CONSTRAINT "Candidatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessosSeletivos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "ano" INTEGER NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "termino" TIMESTAMP(3) NOT NULL,
    "etapa" INTEGER NOT NULL,

    CONSTRAINT "ProcessosSeletivos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cargos_codg_key" ON "Cargos"("codg");

-- CreateIndex
CREATE UNIQUE INDEX "Candidatos_notaEnemId_key" ON "Candidatos"("notaEnemId");

-- CreateIndex
CREATE UNIQUE INDEX "Candidatos_notaVhceId_key" ON "Candidatos"("notaVhceId");

-- AddForeignKey
ALTER TABLE "NotasEnem" ADD CONSTRAINT "NotasEnem_processoSeletivoId_fkey" FOREIGN KEY ("processoSeletivoId") REFERENCES "ProcessosSeletivos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotasVhce" ADD CONSTRAINT "NotasVhce_processoSeletivoId_fkey" FOREIGN KEY ("processoSeletivoId") REFERENCES "ProcessosSeletivos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidatos" ADD CONSTRAINT "Candidatos_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargos"("codg") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidatos" ADD CONSTRAINT "Candidatos_notaEnemId_fkey" FOREIGN KEY ("notaEnemId") REFERENCES "NotasEnem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidatos" ADD CONSTRAINT "Candidatos_notaVhceId_fkey" FOREIGN KEY ("notaVhceId") REFERENCES "NotasVhce"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidatos" ADD CONSTRAINT "Candidatos_processoSeletivoId_fkey" FOREIGN KEY ("processoSeletivoId") REFERENCES "ProcessosSeletivos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
