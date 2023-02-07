import { FC } from "react";
import { Outlet } from "react-router-dom";

const HomeLayout: FC = () => {
  return (
    <>
      <h1>Home</h1>
      <h1>Home</h1>
      <Outlet />
    </>
  );
};

export default HomeLayout;
