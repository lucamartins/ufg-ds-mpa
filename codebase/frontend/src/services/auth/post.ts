import { AxiosResponse } from "axios";
import { ApiType } from "../http";
import { LoginServiceRequest, LoginServiceResponse } from "./post.types";

export const loginService = async (
  api: ApiType,
  data: LoginServiceRequest
): Promise<AxiosResponse<LoginServiceResponse>> =>
  await api.post("/login", data);
