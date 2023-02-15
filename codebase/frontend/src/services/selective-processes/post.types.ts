export interface AddProcessReqData {
  ano: number;
  inicio: string;
  termino: string;
}

export interface ProcessFirstStepReqData {
  processID: string;
  base64: string;
}
