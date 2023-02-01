-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('M', 'F');

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargos" (
    "id" SERIAL NOT NULL,
    "co_ies_curso" INTEGER NOT NULL,
    "desc_cargo" TEXT NOT NULL,
    "desc_grau_academico" TEXT NOT NULL,
    "desc_periodo" TEXT NOT NULL,
    "desc_cidade" TEXT NOT NULL,
    "codg_cargo" INTEGER NOT NULL,
    "numr_vagas" INTEGER NOT NULL,
    "numr_grupo" INTEGER NOT NULL,
    "desc_regional" TEXT NOT NULL,

    CONSTRAINT "Cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notas_Enem" (
    "id" SERIAL NOT NULL,
    "numero_enem" TEXT NOT NULL,
    "cpf_candidato" TEXT NOT NULL,
    "nome_candidato" TEXT NOT NULL,
    "nota_ciencias_natureza" DOUBLE PRECISION NOT NULL,
    "nota_ciencias_humanas" DOUBLE PRECISION NOT NULL,
    "nota_linguagens" DOUBLE PRECISION NOT NULL,
    "nota_matematica" DOUBLE PRECISION NOT NULL,
    "nota_redacao" DOUBLE PRECISION NOT NULL,
    "nota_total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Notas_Enem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programas" (
    "id" SERIAL NOT NULL,
    "codigo" INTEGER NOT NULL,
    "tipo_programa" INTEGER NOT NULL,
    "desc_programa" TEXT NOT NULL,
    "categoria_ingresso" TEXT NOT NULL,

    CONSTRAINT "Programas_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Candidato" (
    "id" SERIAL NOT NULL,
    "numg_candidato" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "codigo_cargo" INTEGER NOT NULL,
    "cor_raca" INTEGER NOT NULL,
    "formacao_escola_publica" BOOLEAN NOT NULL,
    "data_inscricao" TIMESTAMP(3) NOT NULL,
    "codg_situacao" INTEGER NOT NULL,
    "flag_inscricao" INTEGER NOT NULL,
    "programa" INTEGER NOT NULL,
    "tipo_programa" INTEGER NOT NULL,
    "nome_comunidade" TEXT NOT NULL,
    "ano_enem" INTEGER NOT NULL,
    "numr_enem" INTEGER NOT NULL,
    "desc_instrumento" TEXT NOT NULL,
    "nota_final" DOUBLE PRECISION NOT NULL,
    "valr_total_po" DOUBLE PRECISION NOT NULL,
    "valr_red" DOUBLE PRECISION NOT NULL,
    "valr_pf" DOUBLE PRECISION NOT NULL,
    "numr_classificacao" INTEGER NOT NULL,
    "nota_vhce" DOUBLE PRECISION NOT NULL,
    "valr_nota_enem" DOUBLE PRECISION NOT NULL,
    "semestre_ingresso" INTEGER NOT NULL,

    CONSTRAINT "Candidato_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cadastro_cpf_key" ON "Cadastro"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Candidato_numg_candidato_key" ON "Candidato"("numg_candidato");

-- CreateIndex
CREATE UNIQUE INDEX "Candidato_cpf_key" ON "Candidato"("cpf");
