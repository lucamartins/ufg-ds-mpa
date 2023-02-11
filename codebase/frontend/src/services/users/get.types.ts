interface AnalystUser {
  id: string | number;
  email: string;
  name: string;
}

export type GetAnalystUsersResponse = AnalystUser[];
