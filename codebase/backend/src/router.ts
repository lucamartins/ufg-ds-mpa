import { Router } from 'express';
import { validateAuthentication } from './middlewares/validateAuthentication.js';
import { validateAdminAuthentication } from './middlewares/validateAdminAuthentication.js';
import {
  LoginController,
  RegisterUserController,
  ListProcessesController,
  RegisterProcessController,
  UploadNotasEnemController,
  ListProcessCpfsController,
  UploadCandidatosController,
  ListAnalystUsersController,
  DeleteAnalystUserController,
} from './controllers/index.js';

const router = Router();
  
router.get('/mpa/processes', validateAuthentication, ListProcessesController.handler);
router.get('/mpa/users/analyst', validateAuthentication, ListAnalystUsersController.handler);
router.get('/mpa/process/cpfs', validateAuthentication, ListProcessCpfsController.handler);

router.post('/mpa/login', LoginController.handler);
router.post('/mpa/register/user', validateAdminAuthentication, RegisterUserController.handler);
router.post('/mpa/register/process', validateAdminAuthentication, RegisterProcessController.handler);

router.post('/mpa/uploads/candidatos', validateAuthentication, UploadCandidatosController.handler);
router.post('/mpa/uploads/notasenem', validateAuthentication, UploadNotasEnemController.handler);

router.delete('/mpa/users/analyst/:id', validateAdminAuthentication, DeleteAnalystUserController.handler);

export { router };
