import {
  Typography,
  Avatar,
  Divider,
  Button,
  useTheme,
  Paper,
} from "@mui/material";
import { Col, Row } from "@/app/shared/styled";
import ClearIcon from "@mui/icons-material/Clear";
import { UploadFileContainer } from "./UploadFileStyles";
import { useRef, useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { FileHelperInformativeDialog } from "@/app/shared/components/FileHelperInformativeDialog";

export interface UploadFileProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  primaryText: string;
  fileHelperDialog: {
    dialogTitle: string;
    fileFormat: string;
    fileMaxSize: number;
    fileFields: string[];
  };
}

const UploadFile = ({
  file,
  setFile,
  primaryText,
  fileHelperDialog,
}: UploadFileProps) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFileSelectClick = (event: React.MouseEvent<HTMLElement>) => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setFile(e.currentTarget.files[0]);
    }
  };

  const handleRevertUpload = () => {
    setFile(null);
  };

  return (
    <>
      <Paper sx={{ p: "50px 100px" }} variant="outlined">
        <Col>
          <Typography variant="body1" textAlign="center" mb="30px">
            {primaryText}
          </Typography>

          {!file && (
            <UploadFileContainer theme={theme} onClick={handleFileSelectClick}>
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                }}
              >
                <UploadFileIcon color="inherit" />
              </Avatar>
              <Row gap={"3px"}>
                <Typography variant="body1" color="primary">
                  Clique para fazer o upload
                </Typography>
              </Row>
              <Typography variant="caption" color="text.secondary">
                ODS (max. 10MB)
              </Typography>
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInput}
                onChange={handleFileChange}
              />
            </UploadFileContainer>
          )}
          {file && (
            <>
              <Divider sx={{ mb: 3 }} />
              <Col alignItems="center" justifyContent="center">
                <Row>
                  <Typography variant="body1" fontWeight={300} mr={1}>
                    Upload de:{" "}
                  </Typography>
                  <Typography variant="body1" mr={2}>
                    {file.name}
                  </Typography>
                </Row>

                <Button
                  variant="text"
                  onClick={handleRevertUpload}
                  endIcon={<ClearIcon />}
                >
                  Reverter
                </Button>
              </Col>
            </>
          )}

          <Row alignItems="center" mt={2}>
            <Button
              variant="outlined"
              startIcon={<InfoOutlinedIcon />}
              onClick={() => setDialogOpen(true)}
            >
              Formato do arquivo
            </Button>
          </Row>
        </Col>
      </Paper>

      {dialogOpen && (
        <FileHelperInformativeDialog
          handleClose={() => setDialogOpen(false)}
          dialogTitle={fileHelperDialog?.dialogTitle}
          fileFields={fileHelperDialog?.fileFields}
          fileFormat={fileHelperDialog?.fileFormat}
          fileMaxSize={fileHelperDialog?.fileMaxSize}
        />
      )}
    </>
  );
};

export default UploadFile;
