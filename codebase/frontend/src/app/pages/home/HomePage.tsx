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
import { useApi } from "@/app/shared/hooks";
import { useEffect, useState } from "react";
import { getAllProcessesService } from "@/services";
import { SelectiveProcess } from "@/services/selective-processes";
import { Col, Row } from "@/app/shared/styled";
import AddIcon from "@mui/icons-material/Add";

const HomePage = () => {
  const [selectiveProcesses, setSelectiveProcesses] = useState<
    SelectiveProcess[] | null
  >(null);
  const navigate = useNavigate();
  const api = useApi();

  useEffect(() => {
    (async () => {
      const res = await getAllProcessesService(api);
      setSelectiveProcesses(res.data);
    })();
  }, [api]);

  return (
    <>
      <Row justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Processos Seletivos</Typography>
        <Button variant="contained" endIcon={<AddIcon />}>
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
    </>
  );
};

export default HomePage;
