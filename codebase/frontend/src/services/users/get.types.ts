export interface AnalystUser {
  id: string | number;
  email: string;
  nome: string;
}

export type GetAnalystUsersResponse = AnalystUser[];
