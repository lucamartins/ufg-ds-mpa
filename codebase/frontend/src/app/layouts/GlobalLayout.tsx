import { Outlet } from "react-router-dom";
import { BackdropLoading, CustomSnackbar } from "@/app/shared/rootComponents";

const GlobalLayout = () => {
  return (
    <>
      <BackdropLoading />
      <CustomSnackbar />
      <Outlet />
    </>
  );
};

export default GlobalLayout;
