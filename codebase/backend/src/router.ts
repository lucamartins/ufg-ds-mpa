import { Router } from 'express';
import { validateAuthentication } from './middlewares/validateAuthentication.js';
import { validateAdminAuthentication } from './middlewares/validateAdminAuthentication.js'
import { 
  LoginController,
  RegisterUserController,
  UploadCandidatosController
} from './controllers/index.js';

const router = Router();

router.post('/login', LoginController.handler);
router.post('/register/user', validateAdminAuthentication, RegisterUserController.handler);
router.post('/uploads/cadastros', validateAuthentication, UploadCandidatosController.handler);

export { router };
