export interface SelectiveProcess {
  ano: number;
  etapa: 1 | 2 | 3 | 4;
  id: string;
  inicio: string;
  termino: string;
}

export type GetAllProcessesServiceResponse = SelectiveProcess[];
