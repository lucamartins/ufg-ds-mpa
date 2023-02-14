import "dayjs/locale/pt-br";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CustomSnackbar } from "@/app/shared/rootComponents";
import { router } from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <RouterProvider router={router} />
    </LocalizationProvider>
    <CustomSnackbar />
  </React.StrictMode>
);
