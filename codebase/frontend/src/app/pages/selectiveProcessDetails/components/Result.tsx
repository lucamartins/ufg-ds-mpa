import { Col, Row } from "@/app/shared/styled";
import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useApi, useFiles, useSnackbar } from "@/app/shared/hooks";
import {
  getCPFsThirdStepService,
  getResultsService,
  ProcessFirstStepReqData,
  uploadThirdStepService,
} from "@/services";
import { UploadFile } from "@/app/shared/components";
import download from "downloadjs";

const Result = ({
  processId,
  setProcessDetails,
}: {
  processId: string;
  setProcessDetails: (processDetails: any) => void;
}) => {
  const { getBase64 } = useFiles();
  const { openSnackbar } = useSnackbar();
  const api = useApi();

  useEffect(() => {
    (async () => {
      try {
        const res = await getResultsService(api, processId);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <Typography variant="h5" mb={3}>
        Resultado final
      </Typography>
    </>
  );
};

export default Result;
