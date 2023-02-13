import { api } from "@/services";
import { useAuthStore } from "../stores";

export const useApi = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  api.defaults.headers.Authorization = accessToken
    ? `Bearer ${accessToken}`
    : null;

  return api;
};
