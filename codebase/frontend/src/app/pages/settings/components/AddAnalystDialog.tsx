import { Col } from "@/app/shared/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const AddAnalystDialog = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Dialog open={true} maxWidth="sm" fullWidth>
        <Col component="form" onSubmit={handleSubmit}>
          <DialogTitle>Cadastrar Novo Analista</DialogTitle>
          <DialogContent dividers>
            <Col gap={2}>
              <TextField
                label="Nome"
                name="name"
                fullWidth
                required
                value={form.name}
                onChange={handleInputChange}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                required
                value={form.email}
                onChange={handleInputChange}
              />
              <TextField
                label="Senha"
                name="password"
                type="password"
                fullWidth
                required
                value={form.password}
                onChange={handleInputChange}
              />
              <TextField
                label="Confirmação de Senha"
                name="passwordConfirmation"
                type="password"
                fullWidth
                required
                value={form.passwordConfirmation}
                onChange={handleInputChange}
              />
            </Col>
          </DialogContent>
          <DialogActions sx={{ p: "14px 8px" }}>
            <Button variant="outlined">Cancelar</Button>
            <Button variant="contained" type="submit">
              Cadastrar
            </Button>
          </DialogActions>
        </Col>
      </Dialog>
    </>
  );
};

export default AddAnalystDialog;
