import { AxiosResponse } from "axios";
import { ApiType } from "../http";
import { GetAnalystUsersResponse } from "./get.types";

export const getAnalytsUsersService = async (
  api: ApiType
): Promise<AxiosResponse<GetAnalystUsersResponse>> =>
  await api.get("/users/analyst");
