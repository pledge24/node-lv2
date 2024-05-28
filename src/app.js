import express from 'express';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';
import dotenv from 'dotenv';
import AccountsRouter from './routes/accounts.router.js';
import CharactersRouter from './routes/characters.router.js';
import ItemsRouter from './routes/items.router.js';

// .env 파일을 읽어서 process.env에 추가합니다.
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assets'));

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hi! See you again!' });
});

app.use('/api', [router, AccountsRouter, CharactersRouter, ItemsRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
