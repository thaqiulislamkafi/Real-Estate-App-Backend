
import { Router } from "express";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the route definitions for the wishlist module.
 * @generated 2026-03-22
 */

export const WishlistRouter = Router();

import { WishlistController } from "./wishlist.controller";

WishlistRouter.get('/:id',WishlistController.getWishlistById);
WishlistRouter.delete('/:id',WishlistController.deleteWishlist);