import { AuthLayout, HomeLayout } from "@/app/layouts";
import {
  HomePage,
  AddSelectiveProcessPage,
  SelectiveProcessDetailsPage,
  LoginPage,
} from "@/app/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "create",
        element: <AddSelectiveProcessPage />,
      },
      {
        path: "details/:id",
        element: <SelectiveProcessDetailsPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
