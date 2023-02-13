import { useAuthStore } from "@/app/shared/stores";
import { Col, Row } from "@/app/shared/styled";
import { Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { LeftCol, RightCol, StyledLogo } from "./AuthLayoutStyles";
import SecureLoginImg from "/secure_login.svg";
import Logo from "/VERBENA-UFG.png";

const AuthLayout = () => {
  const theme = useTheme();
  const accessToken = useAuthStore((state) => state.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
      return;
    }
  }, [accessToken]);

  return (
    <>
      <Row>
        <LeftCol theme={theme}>
          <Col alignItems="center" mb={10} textAlign="center">
            <Typography variant="h4">Módulo de Processamento Ágil</Typography>
            <Typography variant="h5">Instituto Verbena - UFG</Typography>
          </Col>
          <img src={SecureLoginImg} alt="Login Ilustration" width="240px" />
        </LeftCol>
        <RightCol theme={theme}>
          <Outlet />
          <StyledLogo src={Logo} alt="Logo MPA" width="180px" />
        </RightCol>
      </Row>
    </>
  );
};

export default AuthLayout;
