import { AppBar, Container } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./AppBar";

const HomeLayout: FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default HomeLayout;
