import { Box, Container } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, AccountModal } from "./components";

const HomeLayout: FC = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="lg">
        <Box p="25px 12.5px">
          <Outlet />
        </Box>
      </Container>
      <AccountModal />
    </>
  );
};

export default HomeLayout;
