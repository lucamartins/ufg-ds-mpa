import {
  Button,
  CircularProgress,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import { useNavigate } from "react-router-dom";
import { useApi, useSnackbar } from "@/app/shared/hooks";
import { useEffect, useState } from "react";
import { getAllProcessesService } from "@/services";
import { SelectiveProcess } from "@/services/selective-processes";
import { Col, Row } from "@/app/shared/styled";
import AddIcon from "@mui/icons-material/Add";
import { AddProcessDialog } from "./components";

const HomePage = () => {
  const [selectiveProcesses, setSelectiveProcesses] = useState<
    SelectiveProcess[] | null
  >(null);
  const navigate = useNavigate();
  const api = useApi();
  const { openSnackbar } = useSnackbar();
  const [addProcessDialogOpen, setAddProcessDialogOpen] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(0);

  const refetch = () => setShouldRefetch(shouldRefetch + 1);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllProcessesService(api);
        setSelectiveProcesses(res.data);
      } catch (err) {
        openSnackbar("Falha ao carregar processos seletivos", "error");
      }
    })();
  }, [api, shouldRefetch]);

  return (
    <>
      <Row justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Processos Seletivos</Typography>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => setAddProcessDialogOpen(true)}
        >
          Novo PS
        </Button>
      </Row>
      <List>
        {selectiveProcesses &&
          selectiveProcesses.map((process) => (
            <ListItemButton
              key={process.id}
              onClick={() => {
                navigate(`details/${process.id}`);
              }}
            >
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText>
                PS UFGInclui <b>{process.ano}</b>
              </ListItemText>
            </ListItemButton>
          ))}
      </List>
      {!selectiveProcesses && (
        <Col alignItems="center">
          <CircularProgress />
        </Col>
      )}
      {selectiveProcesses !== null && !selectiveProcesses?.length && (
        <Row>
          <Typography variant="h6">
            Nenhum processo seletivo encontrado.
          </Typography>
        </Row>
      )}
      {addProcessDialogOpen && (
        <AddProcessDialog
          handleClose={() => setAddProcessDialogOpen(false)}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default HomePage;
