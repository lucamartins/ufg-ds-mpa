export interface LoginServiceRequest {
  email: string;
  password: string;
}

export interface LoginServiceResponse {
  email: string;
  nome: string;
  role: string;
  token: string;
}
