import { AxiosResponse } from "axios";
import { ApiType } from "../http";
import {
  AddProcessReqData,
  ProcessFirstStepReqData,
  ProcessFirstStepResData,
  ProcessResultsResData,
  ProcessSecondStepReqData,
  ProcessSecondStepResData,
  ProcessThirdStepReqData,
  ProcessThirdStepResData,
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

export const getCPFsSecondStepService = async (
  api: ApiType,
  processId: string
): Promise<AxiosResponse> =>
  await api.post(
    "/process/cpfs",
    {
      processID: processId,
    },
    {
      responseType: "blob",
    }
  );

export const getCPFsThirdStepService = async (
  api: ApiType,
  processId: string
): Promise<AxiosResponse> =>
  await api.post(
    "/vhce/cpfs",
    {
      processID: processId,
    },
    {
      responseType: "blob",
    }
  );

export const uploadSecondStepService = async (
  api: ApiType,
  data: ProcessSecondStepReqData
): Promise<AxiosResponse<ProcessSecondStepResData>> =>
  await api.post("/uploads/notasenem", data);

export const uploadThirdStepService = async (
  api: ApiType,
  data: ProcessThirdStepReqData
): Promise<AxiosResponse<ProcessThirdStepResData>> =>
  await api.post("/uploads/vhce", data);

export const getResultsService = async (
  api: ApiType,
  processId: string
): Promise<AxiosResponse<ProcessResultsResData>> =>
  await api.post("/resultado", {
    processID: processId,
  });
