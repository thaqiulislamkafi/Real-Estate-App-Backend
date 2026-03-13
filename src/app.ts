import express, { Request, Response } from 'express';
import cors from 'cors';
import { GlobalHandleError } from './app/middleware/globalHandleError';
import { notFound } from './app/middleware/notFound';
import { AuthRouter } from './app/modules/auth/auth.route';

export const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth',AuthRouter);

app.use(GlobalHandleError);
app.use(notFound);

app.get('/', (req:Request, res:Response) => {
  res.send('Serve is running');
});