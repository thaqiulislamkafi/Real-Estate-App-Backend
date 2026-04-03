
import { Request, Response, NextFunction } from "express";
import { WishlistItemService } from "./wishlistItem.service";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Controller for handling HTTP requests related to wishlist items, interacting with the service layer.
 * @generated 2026-03-25
 */

export const WishlistItemController = {

    async getAllWishlistItems(req: Request, res: Response, next: NextFunction) {

        try {
            const wishlistItems = await WishlistItemService.getAllWishlistItems();
            res.status(200).send({
                success: true,
                message: "Wishlist items retrieved successfully",
                data: wishlistItems
            });
        } catch (error) {
            next(error);
        }
    },

    async getWishlistItemsByWishlistId(req: Request, res: Response, next: NextFunction) {

        try {
            const wishlistId = req.params.wishlistId;
            const wishlistItems = await WishlistItemService.getWishlistItemsByWishlistId(String(wishlistId));
            res.status(200).send({
                success: true,
                message: "Wishlist items retrieved successfully",
                data: wishlistItems
            });
        } catch (error) {
            next(error);
        }
    },


    async getWishlistItemById(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const wishlistItem = await WishlistItemService.getWishlistItemById(String(id));
            res.status(200).send({
                success: true,
                message: "Wishlist item retrieved successfully",
                data: wishlistItem
            });
        } catch (error) {
            next(error);
        }
    },

    async addWishlistItem(req: Request, res: Response, next: NextFunction) {

        try {
            const wishlistItem = await WishlistItemService.addWishlistItem(req.body);
            res.status(201).send({
                success: true,
                message: "Wishlist item added successfully",
                data: wishlistItem
            });
        } catch (error) {
            next(error);
        }
    },

    async updateWishlistItem(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const wishlistItem = await WishlistItemService.updateWishlistItem(String(id), req.body);
            res.status(200).send({
                success: true,
                message: "Wishlist item updated successfully",
                data: wishlistItem
            });
        } catch (error) {
            next(error);
        }
    },

    async deleteWishlistItem(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const wishlistItem = await WishlistItemService.deleteWishlistItem(String(id));
            res.status(200).send({
                success: true,
                message: "Wishlist item deleted successfully",
                data: wishlistItem
            });
        } catch (error) {
            next(error);
        }
    }

}