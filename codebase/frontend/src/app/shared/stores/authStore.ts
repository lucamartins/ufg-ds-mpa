import { create } from "zustand";

interface AuthStore {
  user: {
    email: string;
    nome: string;
    // TODO: implement role type
    role: string;
  } | null;
  accessToken: string | null;
  setUser: (user: AuthStore["user"]) => void;
  setAccessToken: (token: AuthStore["accessToken"]) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  accessToken: null,
  setUser: (user: AuthStore["user"]) => set({ user }),
  setAccessToken: (token: AuthStore["accessToken"]) =>
    set({ accessToken: token }),
  logout: () => set({ accessToken: null, user: null }),
}));

export default useAuthStore;
