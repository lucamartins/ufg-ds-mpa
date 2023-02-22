export interface InformativeDialogProps {
  dialogTitle: string;
  fileFormat: string;
  fileMaxSize: number;
  fileFields: string[];
  handleClose: () => void;
}
