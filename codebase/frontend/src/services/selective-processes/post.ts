import { AxiosResponse } from "axios";
import { ApiType } from "../http";
import {
  AddProcessReqData,
  ProcessFirstStepReqData,
  ProcessFirstStepResData,
} from "./post.types";

export const addProcessService = async (
  api: ApiType,
  data: AddProcessReqData
) => await api.post("/register/process", data);

export const uploadFirstStepService = async (
  api: ApiType,
  data: ProcessFirstStepReqData
): Promise<AxiosResponse<ProcessFirstStepResData>> =>
  await api.post("/uploads/candidatos", data);
