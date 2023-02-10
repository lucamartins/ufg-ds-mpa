import { create } from "zustand";

interface AuthStore {
  user: {
    email: string;
    name: string;
    // TODO: implement role type
    role: string;
  } | null;
  token: string | null;
  setUser: (user: AuthStore["user"]) => void;
  setAccessToken: (token: AuthStore["token"]) => void;
}

const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  accessToken: null,
  token: null,
  setUser: (user: AuthStore["user"]) => set({ user }),
  setAccessToken: (token: AuthStore["token"]) => set({ token }),
}));

export default useAuthStore;
