import { Row } from "@/app/shared/styled";
import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { AddAnalystDialog, AnalystUsersList } from "./components";
import AddIcon from "@mui/icons-material/Add";

const SettingsPage: FC = () => {
  return (
    <>
      <Row justifyContent="space-between" mb={2}>
        <Typography variant="h5">Acesso ao MPA</Typography>
        <Button variant="contained" endIcon={<AddIcon />}>
          Cadastrar Analista
        </Button>
      </Row>
      <AnalystUsersList />
      <AddAnalystDialog />
    </>
  );
};

export default SettingsPage;
