import { Router } from "express";
import { validateAuthentication } from "./middlewares/validateAuthentication.js";
import { validateAdminAuthentication } from "./middlewares/validateAdminAuthentication.js";
import {
  LoginController,
  RegisterUserController,
  UploadCandidatosController,
  ListProcessesController,
} from "./controllers/index.js";

const router = Router();

router.post("/mpa/login", LoginController.handler);
router.post(
  "/mpa/register/user",
  validateAdminAuthentication,
  RegisterUserController.handler
);
router.post(
  "/mpa/uploads/cadastros",
  validateAuthentication,
  UploadCandidatosController.handler
);
router.get(
  "/mpa/processes",
  validateAuthentication,
  ListProcessesController.handler
);

export { router };
