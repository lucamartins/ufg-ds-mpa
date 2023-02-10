import { create } from "zustand";

interface AuthStore {
  user: {
    email: string;
    name: string;
    // TODO: implement role type
    role: string;
  };
  token: string;
}

const useAuthStore = create((set, get) => ({
  user: null,
  accessToken: null,
  setUser: (user: AuthStore["user"]) => set({ user }),
  setAccessToken: (token: AuthStore["token"]) => set({ token }),
}));

export default useAuthStore;
