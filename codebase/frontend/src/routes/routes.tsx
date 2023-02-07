import { HomeLayout } from "@/app/layouts";
import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: homeRoutes,
  },
]);

export default router;
