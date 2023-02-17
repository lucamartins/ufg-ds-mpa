import {
  Typography,
  Avatar,
  Divider,
  Button,
  useTheme,
  Paper,
} from "@mui/material";
import { Col, Row } from "../../styled";
import ClearIcon from "@mui/icons-material/Clear";
import { UploadFileContainer } from "./UploadFileStyles";
import { useRef } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";

interface Props {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  primaryText: string;
}

const UploadFile = ({ file, setFile, primaryText }: Props) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const theme = useTheme();

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
              {/* <Typography>ou arraste e solte.</Typography> */}
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
      </Col>
    </Paper>
  );
};

export default UploadFile;
