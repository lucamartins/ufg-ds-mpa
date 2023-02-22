import { AlertColor } from "@mui/material";
import { create } from "zustand";

interface AppStore {
  isSnackbarOpen: boolean;
  snackbarType?: AlertColor;
  snackbarText: string;
  openSnackbar: (text: string, type?: AlertColor) => void;
  closeSnackbar: () => void;
  accModalOpen: boolean;
  openAccModal: () => void;
  closeAccModal: () => void;
  isBackdropLoading: boolean;
  openBackdropLoading: () => void;
  closeBackdropLoading: () => void;
}

const useAppStore = create<AppStore>((set, get) => ({
  isSnackbarOpen: false,
  snackbarType: undefined,
  snackbarText: "",
  accModalOpen: false,
  openAccModal: () => set({ accModalOpen: true }),
  closeAccModal: () => set({ accModalOpen: false }),
  openSnackbar: (text: string, type?: AlertColor) =>
    set({ isSnackbarOpen: true, snackbarType: type, snackbarText: text }),
  closeSnackbar: () => set({ isSnackbarOpen: false }),
  isBackdropLoading: false,
  openBackdropLoading: () => set({ isBackdropLoading: true }),
  closeBackdropLoading: () => set({ isBackdropLoading: false }),
}));

export default useAppStore;
