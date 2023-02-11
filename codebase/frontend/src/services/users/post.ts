import { ApiType } from "../http";
import { RegisterAnalystUserRequestData } from "./post.types";

export const registerAnalystService = async (
  api: ApiType,
  data: RegisterAnalystUserRequestData
) => await api.post("/register/user", data);
