import { Row } from "@/app/shared/styled";
import { Button, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { AddAnalystDialog, AnalystUsersList } from "./components";
import AddIcon from "@mui/icons-material/Add";

const SettingsPage: FC = () => {
  const [isAddAnalystDialogOpen, setIsAddAnalystDialogOpen] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(0);
  const refetch = () => setShouldRefetch(shouldRefetch + 1);

  const handleAddAnalystDialogToggle = () => {
    setIsAddAnalystDialogOpen(!isAddAnalystDialogOpen);
  };

  useEffect(() => {
    refetch();
  }, [isAddAnalystDialogOpen]);

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
      <AnalystUsersList refetch={refetch} shouldRefetch={shouldRefetch} />
      {isAddAnalystDialogOpen && (
        <AddAnalystDialog handleClose={handleAddAnalystDialogToggle} />
      )}
    </>
  );
};

export default SettingsPage;
