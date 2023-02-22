import { Backdrop, CircularProgress } from "@mui/material";
import { useAppStore } from "@/app/shared/stores";

const BackdropLoading = () => {
  const { isBackdropLoading } = useAppStore();

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isBackdropLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoading;
