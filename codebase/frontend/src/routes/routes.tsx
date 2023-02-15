import { AuthLayout, HomeLayout } from "@/app/layouts";
import {
  HomePage,
  SettingsPage,
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
        <Route path="settings" element={<SettingsPage />} />
        <Route path="details" element={<SelectiveProcessDetailsPage />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Route>
  )
);

export default router;
