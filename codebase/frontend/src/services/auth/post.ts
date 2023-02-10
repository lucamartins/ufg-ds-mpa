import { AxiosResponse } from "axios";
import { api } from "../http";
import { LoginServiceRequest, LoginServiceResponse } from "./post.types";

export const loginService = async (
  data: LoginServiceRequest
): Promise<AxiosResponse<LoginServiceResponse>> =>
  await api.post("/login", data);
