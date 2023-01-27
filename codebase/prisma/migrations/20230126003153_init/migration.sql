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
    "numero_enem" INTEGER NOT NULL,
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
