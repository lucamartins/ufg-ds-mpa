import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import { useNavigate } from "react-router-dom";

const selectiveProcessItems = ["2021", "2022", "2023"];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h4">Processos Seletivos</Typography>
      <List>
        {selectiveProcessItems.map((item) => (
          <ListItemButton
            onClick={() => {
              navigate(`details/${item}`);
            }}
          >
            <ListItemIcon key={item}>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText>
              PS UFGInclui <b>{item}</b>
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default HomePage;
