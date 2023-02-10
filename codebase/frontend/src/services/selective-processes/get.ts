import { AxiosResponse } from "axios";
import { ApiType } from "../http";
import { GetAllProcessesServiceResponse } from "./get.types";

export const getAllProcessesService = async (
  api: ApiType
): Promise<AxiosResponse<GetAllProcessesServiceResponse>> =>
  await api.get("/processes");
