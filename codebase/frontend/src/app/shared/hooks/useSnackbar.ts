import { useAppStore } from "../stores";

export const useSnackbar = () => {
  const openSnackbar = useAppStore((state) => state.openSnackbar);

  return { openSnackbar };
};
