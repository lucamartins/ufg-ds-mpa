export interface LoginServiceRequest {
  email: string;
  password: string;
}

export interface LoginServiceResponse {
  email: string;
  nome: string;
  role: "ADMIN" | "ANALYST";
  token: string;
}
