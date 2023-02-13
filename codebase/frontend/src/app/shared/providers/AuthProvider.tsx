import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores";

const AuthProvider: FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/auth/login");
      return;
    }
    navigate("/");
  }, [accessToken]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthProvider;
