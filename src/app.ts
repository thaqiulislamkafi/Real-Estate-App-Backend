import express, { Request, Response } from 'express';
import cors from 'cors';
import { GlobalHandleError } from './app/middleware/globalHandleError';
import { notFound } from './app/middleware/notFound';
import { AuthRouter } from './app/modules/auth/auth.route';
import { PropertyRouter } from './app/modules/property/property.route';
import { ReviewRouter } from './app/modules/review/review.route';
import { WishlistRouter } from './app/modules/wishlist/wishlist.route';
import { WishlistItemRouter } from './app/modules/wishlistItem/wishlistItem.route';
import { BookedPropertyRouter } from './app/modules/bookedProperty/bookedProperty.route';
import { SoldPropertyRouter } from './app/modules/soldProperty/soldProperty.route';
import { AgentRouter } from './app/modules/agent/agent.route';

export const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/agent', AgentRouter);
app.use('/api/v1/property', PropertyRouter);
app.use('/api/v1/review', ReviewRouter);
app.use('/api/v1/wishlist', WishlistRouter);
app.use('/api/v1/wishlist-item', WishlistItemRouter);
app.use('/api/v1/booked-property', BookedPropertyRouter);
app.use('/api/v1/sold-property', SoldPropertyRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.use(GlobalHandleError);
app.use(notFound);