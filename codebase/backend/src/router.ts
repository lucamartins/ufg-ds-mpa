import { Router } from 'express';
import { 
  ListCadastrosController,
  UploadCadastrosController
} from './controllers/index.js'

const router = Router();

router.get('/cadastros', ListCadastrosController.handler);
router.post('/uploads/cadastros', UploadCadastrosController.handler)

export { router }
