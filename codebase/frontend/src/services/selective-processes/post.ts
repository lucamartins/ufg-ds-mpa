import { ApiType } from "../http";
import { AddProcessReqData, ProcessFirstStepReqData } from "./post.types";

export const addProcessService = async (
  api: ApiType,
  data: AddProcessReqData
) => await api.post("/register/process", data);

export const uploadFirstStepService = async (
  api: ApiType,
  data: ProcessFirstStepReqData
) => await api.post("/uploads/candidatos", data);
