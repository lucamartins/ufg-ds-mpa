import { AuthLayout, HomeLayout } from "@/app/layouts";
import {
  HomePage,
  AddSelectiveProcessPage,
  SelectiveProcessDetailsPage,
  LoginPage,
} from "@/app/pages";
import { AuthProvider } from "@/app/shared/providers";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthProvider />}>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<AddSelectiveProcessPage />} />
        <Route path="details/:id" element={<SelectiveProcessDetailsPage />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Route>
  )
);

export default router;
