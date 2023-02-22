import { SelectiveProcess } from "./get.types";

export interface AddProcessReqData {
  ano: number;
  inicio: string;
  termino: string;
}

export interface ProcessFirstStepReqData {
  processID: string;
  base64: string;
}

export interface ProcessFirstStepResData {
  message: string;
  processData: SelectiveProcess;
}

export interface ProcessSecondStepReqData {
  processID: string;
  base64: string;
}

export interface ProcessSecondStepResData {
  message: string;
  processData: SelectiveProcess;
}

export interface ProcessThirdStepReqData {
  processID: string;
  base64: string;
}

export interface ProcessThirdStepResData {
  message: string;
  processData: SelectiveProcess;
}

export type ProcessResultsResData = {
  anoEnem: number;
  cargoId: number;
  corRaca: number;
  cpf: string;
  dataInscricao: string;
  formacaoEscolaPublica: boolean;
  id: string;
  nomeComunidade: string;
  notaEnemId: string;
  notaFinal: number;
  notaVhceId: string;
  numCandidato: string;
  processoSeletivoId: string;
  programa: number;
  semestreIngresso: string;
  tipoPrograma: number;
}[];
