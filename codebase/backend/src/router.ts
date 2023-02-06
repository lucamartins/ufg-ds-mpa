import { Router } from 'express';
import { validateAuthenticated } from './middlewares/validateAuthenticated.js';
import { 
  ListCadastrosController,
  UploadCadastrosController,
  LoginController,
  RegisterUserController
} from './controllers/index.js';

const router = Router();

router.post('/login', LoginController.handler);
router.post('/register/user', validateAuthenticated, RegisterUserController.handler);
router.post('/uploads/cadastros', validateAuthenticated, UploadCadastrosController.handler);
router.get('/cadastros', validateAuthenticated, ListCadastrosController.handler);

export { router };
