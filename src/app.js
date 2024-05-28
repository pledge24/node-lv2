import express from 'express';
// import LogMiddleware from './middlewares/log.middleware.js';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';
import dotenv from 'dotenv';
import AccountsRouter from './routes/accounts.router.js';
import CharactersRouter from './routes/characters.router.js';
import ItemsRouter from './routes/items.router.js';
// import CommentsRouter from './routes/comments.router.js';

// .env 파일을 읽어서 process.env에 추가합니다.
dotenv.config();

const app = express();
const PORT = 3306;

app.use(express.json());
app.use('/api', [AccountsRouter, CharactersRouter, ItemsRouter]); //app.use('/api', [UsersRouter, PostsRouter, CommentsRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
