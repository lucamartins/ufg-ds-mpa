import { ApiType } from "../http";
import { AddProcessReqData } from "./post.types";

export const addProcessService = async (
  api: ApiType,
  data: AddProcessReqData
) => await api.post("/register/process", data);
