import { ApiType } from "../http";

export const deleteAnalystService = async (api: ApiType, analystId: string) =>
  await api.delete(`/users/analyst/${analystId}`);
