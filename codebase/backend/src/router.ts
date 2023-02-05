import { Router } from 'express';
import { validateAuthenticated } from './middlewares/validateAuthenticated.js';
import { 
  ListCadastrosController,
  UploadCadastrosController,
  LoginController,
  RegisterUserController
} from './controllers/index.js';

const router = Router();

router.get('/cadastros', ListCadastrosController.handler);
router.post('/uploads/cadastros', UploadCadastrosController.handler);
router.post('/login', LoginController.handler);
router.post('/register/user', validateAuthenticated, RegisterUserController.handler);

export { router };
