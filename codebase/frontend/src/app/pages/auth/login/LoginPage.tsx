import { useAppStore, useAuthStore } from "@/app/shared/stores";
import { Col } from "@/app/shared/styled";
import { loginService } from "@/services";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("passme1234");
  const { setUser, setAccessToken } = useAuthStore(
    ({ setUser, setAccessToken }) => ({
      setUser,
      setAccessToken,
    })
  );
  const openSnackbar = useAppStore((state) => state.openSnackbar);
  const navigate = useNavigate();

  const handleInputFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const res = await loginService({ email, password });
      const { token, ...user } = res.data;
      setAccessToken(token);
      setUser(user);
      openSnackbar(`Bem vindo novamente, ${user.nome}!`, "success");
      navigate("/");
    } catch (error) {
      openSnackbar("Falha durante autenticação", "error");
    }

    return;
  };

  return (
    <Col width="540px" component="form" onSubmit={handleSubmit}>
      <Col textAlign="start" mb={6}>
        <Typography variant="h4" mb={1}>
          Bem vindo!
        </Typography>
        <Typography variant="h5" color="light.text.secondary" fontWeight={300}>
          Insira os detalhes de sua conta para entrar.
        </Typography>
      </Col>
      <Col gap={2} mb={4}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          required
          name="email"
          inputProps={{ name: "email" }}
          onChange={handleInputFieldChange}
        />
        <TextField
          label="Senha"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          required
          name="password"
          inputProps={{ name: "password" }}
          onChange={handleInputFieldChange}
        />
      </Col>
      <Button fullWidth variant="contained" size="large" type="submit">
        Entrar
      </Button>
    </Col>
  );
};

export default LoginPage;
