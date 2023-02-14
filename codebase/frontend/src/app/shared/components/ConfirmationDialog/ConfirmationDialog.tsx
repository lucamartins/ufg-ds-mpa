import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { ConfirmationDialogProps } from "./ConfirmationDialogTypes";

const ConfirmationDialog = ({
  message,
  handleClose,
  handleConfirm,
}: ConfirmationDialogProps) => {
  return (
    <Dialog open={true}>
      <DialogTitle>Atenção - Ação Permanente</DialogTitle>
      <DialogContent dividers>{message}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} variant="contained" color="error">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
