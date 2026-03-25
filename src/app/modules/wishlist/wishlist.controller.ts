
import { NextFunction, Request, Response } from "express";
import { WishlistService } from "./wishlist.service";

export const WishlistController = {

    async getAllWishlists(req: Request, res: Response, next: NextFunction) {

        try {
            const wishlists = await WishlistService.getAllWishlists();
            res.status(200).send({
                success: true,
                message: "Wishlists retrieved successfully",
                data: wishlists
            });
        } catch (error) {
            next(error);
        }
    },

    async getWishlistById(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const wishlist = await WishlistService.getWishlistById(String(id));
            res.status(200).send({
                success: true,
                message: "Wishlist retrieved successfully",
                data: wishlist
            });
        } catch (error) {
            next(error);
        }
    },


    async deleteWishlist(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const wishlist = await WishlistService.deleteWishlist(String(id));
            res.status(200).send({
                success: true,
                message: "Wishlist deleted successfully",
                data: wishlist
            });
        } catch (error) {
            next(error);
        }
    }
};
