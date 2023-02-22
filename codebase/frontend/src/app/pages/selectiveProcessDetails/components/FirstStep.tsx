import { Row } from "@/app/shared/styled";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useApi, useFiles, useSnackbar } from "@/app/shared/hooks";
import { ProcessFirstStepReqData, uploadFirstStepService } from "@/services";
import { UploadFile } from "@/app/shared/components";

const FirstStep = ({
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
      const res = await uploadFirstStepService(api, data);
      setProcessDetails(res.data?.processData);
      openSnackbar("Etapa 1 concluída", "success");
    } catch (err) {
      openSnackbar("Falha no upload", "error");
    }
  };

  return (
    <>
      <Typography variant="h5" mb={3}>
        Upload de Candidaturas
      </Typography>
      <UploadFile
        file={file}
        setFile={setFile}
        primaryText="Para dar continuidade no processo seletivo, você precisa realizar o upload do arquivo (.ods) com os dados de candidatura dos participantes."
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

export default FirstStep;
