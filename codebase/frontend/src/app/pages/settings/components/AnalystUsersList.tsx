import { GetAnalystUsersResponse } from "@/services/users";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useApi } from "@/app/shared/hooks";
import { useEffect, useState } from "react";
import { getAnalytsUsersService } from "@/services/users/get";

const AnalystUsersList = () => {
  const api = useApi();
  const [analysts, setAnalysts] = useState<GetAnalystUsersResponse>([]);

  useEffect(() => {
    (async () => {
      const res = await getAnalytsUsersService(api);
      setAnalysts(res.data);
    })();
  }, []);

  return (
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
  );
};

export default AnalystUsersList;
