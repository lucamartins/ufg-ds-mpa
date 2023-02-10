import { Col } from "@/app/shared/styled";
import { Button, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Col width="540px">
      <Col textAlign="start" mb={6}>
        <Typography variant="h4" mb={1}>
          Bem vindo!
        </Typography>
        <Typography variant="h5" color="light.text.secondary" fontWeight={300}>
          Insira os detalhes de sua conta para entrar.
        </Typography>
      </Col>
      <Col gap={2} mb={4}>
        <TextField label="Email" variant="outlined" fullWidth type="email" />
        <TextField label="Senha" variant="outlined" fullWidth type="password" />
      </Col>
      <Button fullWidth variant="contained" size="large">
        Entrar
      </Button>
    </Col>
  );
};

export default LoginPage;
