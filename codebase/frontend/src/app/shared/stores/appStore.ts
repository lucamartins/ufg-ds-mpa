import { AlertColor } from "@mui/material";
import { create } from "zustand";

interface AppStore {
  isSnackbarOpen: boolean;
  snackbarType?: AlertColor;
  snackbarText: string;
  openSnackbar: (text: string, type?: AlertColor) => void;
  closeSnackbar: () => void;
}

const useAppStore = create<AppStore>((set, get) => ({
  isSnackbarOpen: false,
  snackbarType: undefined,
  snackbarText: "",
  openSnackbar: (text: string, type?: AlertColor) =>
    set({ isSnackbarOpen: true, snackbarType: type, snackbarText: text }),
  closeSnackbar: () => set({ isSnackbarOpen: false }),
}));

export default useAppStore;
