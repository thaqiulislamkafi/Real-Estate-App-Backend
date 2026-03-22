
import { Router } from "express";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the route definitions for the wishlist module.
 * @generated 2026-03-22
 */

export const WishlistRouter = Router();

import { WishlistController } from "./wishlist.controller";
import { validate } from "../../middleware/validate";
import { AuthRouter } from "../auth/auth.route";
import { addWishlistSchema } from "./wishlist.schema";

WishlistRouter.get('/:id',WishlistController.getWishlistById);
WishlistRouter.post('/',validate(addWishlistSchema),WishlistController.addWishlist);
WishlistRouter.put('/:id',WishlistController.updateWishlist);
WishlistRouter.delete('/:id',WishlistController.deleteWishlist);