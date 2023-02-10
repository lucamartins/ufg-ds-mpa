import { useAppStore, useAuthStore } from "@/app/shared/stores";
import { Row } from "@/app/shared/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const AccountModal = () => {
  const { accModalOpen, closeAccModal } = useAppStore(
    ({ accModalOpen, closeAccModal }) => ({
      accModalOpen,
      closeAccModal,
    })
  );
  const user = useAuthStore((state) => state.user);

  const createAccRowData = (label: string, value: string) => (
    <Row>
      <Typography mr={1} fontWeight={200}>
        {label}:
      </Typography>
      <Typography fontWeight={500}>{value}</Typography>
    </Row>
  );

  return (
    <Dialog open={accModalOpen} onClose={closeAccModal} maxWidth="sm" fullWidth>
      <DialogTitle>Minha Conta</DialogTitle>
      <DialogContent dividers>
        {user && (
          <>
            {createAccRowData("Nome", user?.nome)}
            {createAccRowData("Email", user?.email)}
            {createAccRowData("Cargo", user?.role)}
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ p: "12px 18px" }}>
        <Button variant="outlined" onClick={closeAccModal}>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccountModal;
