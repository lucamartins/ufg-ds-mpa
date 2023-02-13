import { Snackbar, Alert } from "@mui/material";
import { useAppStore } from "@/app/shared/stores";

const CustomSnackbar = () => {
  const { isSnackbarOpen, closeSnackbar, snackbarType, snackbarText } =
    useAppStore(
      ({ isSnackbarOpen, closeSnackbar, snackbarType, snackbarText }) => ({
        isSnackbarOpen,
        closeSnackbar,
        snackbarType,
        snackbarText,
      })
    );

  return (
    <Snackbar
      open={isSnackbarOpen}
      onClose={closeSnackbar}
      autoHideDuration={6000}
    >
      <Alert
        onClose={closeSnackbar}
        sx={{ width: "100%" }}
        severity={snackbarType}
        variant="filled"
      >
        {snackbarText}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
