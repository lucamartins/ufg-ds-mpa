export interface SelectiveProcess {
  id: string;
  ano: number;
  // TODO: validate this type
  candidatos: any[];
}

export type GetAllProcessesServiceResponse = SelectiveProcess[];
