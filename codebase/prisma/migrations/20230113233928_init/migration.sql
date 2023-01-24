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
CREATE UNIQUE INDEX "Candidato_numg_candidato_key" ON "Candidato"("numg_candidato");

-- CreateIndex
CREATE UNIQUE INDEX "Candidato_cpf_key" ON "Candidato"("cpf");
