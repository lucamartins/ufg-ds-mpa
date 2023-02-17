import { FC, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useSnackbar } from "../hooks";
import { useAuthStore } from "../stores";

const AuthProvider: FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!accessToken) {
      openSnackbar("Autenticação necessária", "error");
      navigate("/auth/login");
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/");
  }, [accessToken]);

  if (loading) return null;

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthProvider;
