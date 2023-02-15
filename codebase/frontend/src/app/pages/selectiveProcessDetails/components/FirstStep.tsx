import { Col, Row } from "@/app/shared/styled";
import {
  Avatar,
  Button,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useRef, useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {} from "@mui/material/colors";
import { FileDropContainer } from "./FirstStepStyles";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";

const FirstStep: FC = () => {
  const theme = useTheme();
  const fileInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

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
      <Typography variant="h5" mb="35px">
        Upload de Candidaturas
      </Typography>
      <Paper sx={{ p: "50px 100px", mb: 2 }} variant="outlined">
        <Col>
          <Typography variant="body1" textAlign="center" mb="30px">
            Para dar continuidade no processo seletivo, você precisa realizar o
            upload do arquivo (.csv/.ods) com dados de candidatura dos
            participantes.
          </Typography>
          {!file && (
            <FileDropContainer theme={theme} onClick={handleFileSelectClick}>
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
                <Typography>ou arraste e solte.</Typography>
              </Row>
              <Typography variant="caption" color="text.secondary">
                CSV ou ODS (max. 10MB)
              </Typography>
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInput}
                onChange={handleFileChange}
              />
            </FileDropContainer>
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
        </Col>
      </Paper>
      <Row justifyContent="flex-end">
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ minWidth: "320px" }}
        >
          Confirmar
        </Button>
      </Row>
    </>
  );
};

export default FirstStep;
