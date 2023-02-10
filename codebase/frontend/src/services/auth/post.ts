import { api } from "../http";
import { LoginServiceRequest, LoginServiceResponse } from "./post.types";

export const loginService = async (
  data: LoginServiceRequest
): Promise<LoginServiceResponse> => await api.post("/login", data);
