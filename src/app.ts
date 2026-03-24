import express, { Request, Response } from 'express';
import cors from 'cors';
import { GlobalHandleError } from './app/middleware/globalHandleError';
import { notFound } from './app/middleware/notFound';
import { AuthRouter } from './app/modules/auth/auth.route';
import { PropertyRouter } from './app/modules/property/property.route';
import { ReviewRouter } from './app/modules/review/review.route';
import { WishlistRouter } from './app/modules/wishlist/wishlist.route';

export const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/property', PropertyRouter);
app.use('/api/v1/review', ReviewRouter);
app.use('/api/v1/wishlist', WishlistRouter);

app.use(GlobalHandleError);
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});