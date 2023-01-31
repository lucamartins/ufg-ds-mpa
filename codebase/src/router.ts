import { Router } from 'express';
import { ListCadastrosController } from './controllers/ListCadastrosController.js'

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World from router file!');
});

router.get('/cadastros', ListCadastrosController.handler );

export { router }
