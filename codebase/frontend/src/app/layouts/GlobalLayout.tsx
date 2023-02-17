import { Outlet } from "react-router-dom";
import { CustomSnackbar } from "../shared/rootComponents";

const GlobalLayout = () => {
  return (
    <>
      <CustomSnackbar />
      <Outlet />
    </>
  );
};

export default GlobalLayout;
