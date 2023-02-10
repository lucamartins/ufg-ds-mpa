import { ApiType } from "../http";

export const getAllProcesses = async (api: ApiType) =>
  await api.get("/processes");
