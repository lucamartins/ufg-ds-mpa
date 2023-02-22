import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { TableCellStyled } from "./FileHelperInformativeDialogStyles";
import { FileHelperInformativeDialogProps } from "./FileHelperInformativeDialogTypes";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import { Row } from "@/app/shared/styled";

const FileHelperInformativeDialog = ({
  dialogTitle,
  fileFormat,
  fileMaxSize,
  fileFields,
  handleClose,
}: FileHelperInformativeDialogProps) => {
  const theme = useTheme();

  return (
    <Dialog open={true} maxWidth="md" fullWidth onClose={handleClose}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent dividers>
        <Row alignItems="center" mb={2}>
          <InfoOutlinedIcon fontSize="small" sx={{ mr: 1 }} color="info" />
          <Typography mr={1}>Formato do arquivo:</Typography>
          <Typography>{fileFormat}</Typography>
        </Row>
        <Row alignItems="center" mb={2}>
          <StorageOutlinedIcon fontSize="small" sx={{ mr: 1 }} color="info" />
          <Typography mr={1}>Tamanho máximo:</Typography>
          <Typography>{fileMaxSize}MB</Typography>
        </Row>
        <Row alignItems="center" mb={2}>
          <AccountTreeOutlinedIcon
            fontSize="small"
            sx={{ mr: 1, color: theme.palette.info.main }}
          />
          <Typography>Campos:</Typography>
        </Row>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {fileFields.map((field) => (
                  <TableCellStyled key={field} align="center">
                    {field}
                  </TableCellStyled>
                ))}
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions sx={{ m: "5px 10px" }}>
        <Button onClick={handleClose} variant="contained" color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FileHelperInformativeDialog;
