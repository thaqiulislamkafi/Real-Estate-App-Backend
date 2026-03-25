
import { Wishlist } from "../../../generated/prisma/browser";
import { WishlistRepository } from "./wishlist.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Schema for validating wishlist data when adding or updating wishlists.
 * @generated 2026-03-22
 */

export const WishlistService = {

    async getAllWishlists() {
        return await WishlistRepository.findAll();
    },

    async getWishlistById(id: string) {
        return await WishlistRepository.findById(id);
    },
    
    async deleteWishlist(id: string) {
        return await WishlistRepository.delete(id);
     }
};