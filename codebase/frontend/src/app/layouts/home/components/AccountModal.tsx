import { useAppStore } from "@/app/shared/stores";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const AccountModal = () => {
  const { accModalOpen, closeAccModal } = useAppStore(
    ({ accModalOpen, closeAccModal }) => ({
      accModalOpen,
      closeAccModal,
    })
  );

  return (
    <Dialog open={accModalOpen} onClose={closeAccModal}>
      <DialogTitle>Minha Conta</DialogTitle>
      <DialogContent>Content</DialogContent>
      <DialogActions>Actions</DialogActions>
    </Dialog>
  );
};

export default AccountModal;
