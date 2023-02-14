import { GetAnalystUsersResponse } from "@/services/users";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useApi, useSnackbar } from "@/app/shared/hooks";
import { useEffect, useState } from "react";
import { getAnalytsUsersService } from "@/services/users/get";

const AnalystUsersList = () => {
  const api = useApi();
  const [analysts, setAnalysts] = useState<GetAnalystUsersResponse>([]);
  const { openSnackbar } = useSnackbar();

  useEffect(() => {
    (async () => {
      try {
        const res = await getAnalytsUsersService(api);
        setAnalysts(res.data);
      } catch (error) {
        openSnackbar("Falha ao obter analistas", "error");
      }
    })();
  }, []);

  return (
    <>
      {!!analysts.length && (
        <Paper variant="outlined">
          <List>
            {analysts.map((user, ind) => (
              <>
                <ListItem key={user.id}>
                  <ListItemText>{user.nome}</ListItemText>
                  <ListItemText>{user.email}</ListItemText>
                  <Button variant="outlined" endIcon={<DeleteOutlineIcon />}>
                    Excluir Acesso
                  </Button>
                </ListItem>
                {ind !== analysts.length - 1 && <Divider />}
              </>
            ))}
          </List>
        </Paper>
      )}
      {!analysts.length && (
        <Typography variant="body1">
          Nenhum usuário analista encontrado.
        </Typography>
      )}
    </>
  );
};

export default AnalystUsersList;
