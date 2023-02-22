import { Col, Row } from "@/app/shared/styled";
import { Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useApi, useFiles, useSnackbar } from "@/app/shared/hooks";
import {
  getCPFsSecondStepService,
  ProcessFirstStepReqData,
  uploadSecondStepService,
} from "@/services";
import { UploadFile } from "@/app/shared/components";
import download from "downloadjs";

const SecondStep = ({
  processId,
  setProcessDetails,
}: {
  processId: string;
  setProcessDetails: (processDetails: any) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const { getBase64 } = useFiles();
  const { openSnackbar } = useSnackbar();
  const api = useApi();

  const handleConfirmUpload = async (e: React.MouseEvent<HTMLElement>) => {
    if (!file) {
      openSnackbar("Faça o upload do arquivo", "error");
      return;
    }

    try {
      const fileBase64 = await getBase64(file);
      const data: ProcessFirstStepReqData = {
        base64: fileBase64,
        processID: processId,
      };
      const res = await uploadSecondStepService(api, data);
      setProcessDetails(res.data?.processData);
      openSnackbar("Etapa 2 concluída", "success");
    } catch (err) {
      openSnackbar("Falha no upload", "error");
    }
  };

  const handleDownloadCPFs = async () => {
    try {
      const res = await getCPFsSecondStepService(api, processId);
      const blob = await res.data;
      download(blob, `CPFs-ENEM-${processId}.txt`);
    } catch (err) {
      openSnackbar("Falha ao obter documento", "error");
    }
  };

  return (
    <>
      <Typography variant="h5" mb={3}>
        Upload das notas ENEM dos participantes
      </Typography>
      <Paper sx={{ mb: 2, p: 2 }} variant="outlined">
        <Col alignItems="center">
          <Typography variant="body1" p={2}>
            Clique no botão abaixo para fazer download do arquivo com os CPFs
            dos participantes.
          </Typography>
          <Button onClick={handleDownloadCPFs}>Obter CPFs</Button>
        </Col>
      </Paper>
      <UploadFile
        file={file}
        setFile={setFile}
        primaryText="Para dar continuidade no processo seletivo, você precisa realizar o upload do arquivo (.ods) com as notas ENEM dos participantes."
      />
      <Row justifyContent="flex-end" mt={2}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ minWidth: "320px" }}
          onClick={handleConfirmUpload}
        >
          Confirmar
        </Button>
      </Row>
    </>
  );
};

export default SecondStep;
