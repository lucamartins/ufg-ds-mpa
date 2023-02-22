export interface FileHelperInformativeDialogProps {
  dialogTitle: string;
  fileFormat: string;
  fileMaxSize: number;
  fileFields: string[];
  handleClose: () => void;
}
