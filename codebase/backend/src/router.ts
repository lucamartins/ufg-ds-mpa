import { Router } from 'express';
import { validateAuthentication } from './middlewares/validateAuthentication.js';
import { validateAdminAuthentication } from './middlewares/validateAdminAuthentication.js';
import { 
  LoginController,
  RegisterUserController,
  ListProcessesController,
  RegisterProcessController,
  UploadCandidatosController,
  ListAnalystUsersController,
  DeleteAnalystUserController
} from './controllers/index.js';

const router = Router();

router.get('/mpa/processes', validateAuthentication, ListProcessesController.handler);
router.get('/mpa/users/analyst', validateAuthentication, ListAnalystUsersController.handler);

router.post('/mpa/login', LoginController.handler);
router.post('/mpa/register/user', validateAdminAuthentication, RegisterUserController.handler);
router.post('/mpa/uploads/cadastros', validateAuthentication, UploadCandidatosController.handler);
router.post('/mpa/register/process', validateAdminAuthentication, RegisterProcessController.handler);

router.delete('/mpa/users/analyst', validateAdminAuthentication, DeleteAnalystUserController.handler);

export { router };
