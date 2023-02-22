import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useApi } from "@/app/shared/hooks";
import { getResultsService } from "@/services";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Row } from "@/app/shared/styled";

const columns: GridColDef[] = [
  { field: "position", headerName: "Posição", width: 200 },
  { field: "cpf", headerName: "CPF", width: 200 },
  { field: "id", headerName: "Número do candidato", width: 240 },
  { field: "grade", headerName: "Nota final", width: 200 },
];

const Result = ({ processId }: { processId: string }) => {
  const [resultData, setResultData] =
    useState<{ position: number; cpf: string; grade: number; id: string }[]>();
  const api = useApi();

  useEffect(() => {
    (async () => {
      try {
        const res = await getResultsService(api, processId);
        const resDataParsed = res.data.map((item, ind) => ({
          position: ind + 1,
          cpf: item.cpf,
          grade: Number(item.notaFinal.toFixed(2)),
          id: item.numCandidato,
        }));
        setResultData(resDataParsed);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (!resultData)
    return (
      <Row width="100%" justifyContent="center">
        <CircularProgress />
      </Row>
    );

  return (
    <>
      <Typography variant="h5" mb={2}>
        Resultado final
      </Typography>

      <Box height={500} width="100%">
        <DataGrid
          columns={columns}
          rows={resultData}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Box>
    </>
  );
};

export default Result;
