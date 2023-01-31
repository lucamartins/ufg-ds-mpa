import express from 'express';
import { router } from './router.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server Listening on PORT ${PORT}`));