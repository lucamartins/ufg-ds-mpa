import { Box, Container } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./AppBar";

const HomeLayout: FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <Box p="25px 12.5px">
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default HomeLayout;
