
import { Router } from "express";
import { WishlistItemController } from "./wishlistItem.controller";
import { validate } from "../../middleware/validate";
import { addWishlistItemSchema, updateWishlistItemSchema } from "./wishlistItem.schema";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Route definitions for wishlist item-related endpoints, connecting HTTP methods to controller actions.
 * @generated 2026-03-25
 */

export const WishlistItemRouter = Router();

WishlistItemRouter.get("/", WishlistItemController.getAllWishlistItems);
WishlistItemRouter.get("/:id", WishlistItemController.getWishlistItemById);
WishlistItemRouter.get("/user/:userId", WishlistItemController.getWishlistItemsByUserId);
WishlistItemRouter.post("/:userId", validate(addWishlistItemSchema), WishlistItemController.addWishlistItem);
WishlistItemRouter.put("/:id", validate(updateWishlistItemSchema), WishlistItemController.updateWishlistItem);
WishlistItemRouter.delete("/:id", WishlistItemController.deleteWishlistItem);