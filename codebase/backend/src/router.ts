import { Router } from 'express';
import { 
  ListCadastrosController,
  UploadCadastrosController,
  LoginController
} from './controllers/index.js';

const router = Router();

router.get('/cadastros', ListCadastrosController.handler);
router.post('/uploads/cadastros', UploadCadastrosController.handler);
router.post('/login', LoginController.handler);

export { router };
