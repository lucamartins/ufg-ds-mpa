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

const mockDataAnalystUsers: GetAnalystUsersResponse = [
  {
    id: 1,
    email: "joao@mail.com",
    name: "Joao Da Silva",
  },
  {
    id: 2,
    email: "joao2@mail.com",
    name: "Joao Da Penha",
  },
  {
    id: 3,
    email: "joao3@mail.com",
    name: "Joao Da Fonseca",
  },
];

const AnalystUsersList = () => {
  return (
    <Paper variant="outlined">
      <List>
        {mockDataAnalystUsers.map((user, ind) => (
          <>
            <ListItem key={user.id}>
              <ListItemText>{user.name}</ListItemText>
              <ListItemText>{user.email}</ListItemText>
              <Button variant="outlined" endIcon={<DeleteOutlineIcon />}>
                Excluir Acesso
              </Button>
            </ListItem>
            {ind !== mockDataAnalystUsers.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
};

export default AnalystUsersList;
