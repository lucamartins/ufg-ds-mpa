import { Row } from "@/app/shared/styled";
import { Button, Typography } from "@mui/material";
import { FC, useState } from "react";
import { AddAnalystDialog, AnalystUsersList } from "./components";
import AddIcon from "@mui/icons-material/Add";

const SettingsPage: FC = () => {
  const [isAddAnalystDialogOpen, setIsAddAnalystDialogOpen] = useState(false);

  const handleAddAnalystDialogToggle = () => {
    setIsAddAnalystDialogOpen(!isAddAnalystDialogOpen);
  };

  return (
    <>
      <Row justifyContent="space-between" mb={2}>
        <Typography variant="h5">Acesso ao MPA</Typography>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={handleAddAnalystDialogToggle}
        >
          Cadastrar Analista
        </Button>
      </Row>
      <AnalystUsersList />
      {isAddAnalystDialogOpen && (
        <AddAnalystDialog handleClose={handleAddAnalystDialogToggle} />
      )}
    </>
  );
};

export default SettingsPage;
