
import { WishlistItem } from "../../../generated/prisma/browser";
import { WishlistRepository } from "../wishlist/wishlist.repository";
import { WishlistItemRepository } from "./wishlistItem.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Service for managing wishlist items, providing business logic and validation.
 * @generated 2026-03-25
 */

export const WishlistItemService = {

    async getAllWishlistItems() {
        return await WishlistItemRepository.findAll();
    },

    async getWishlistItemsByUserId(userId: string) {

        const wishlist = await WishlistRepository.findByUserId(userId) ;

        if(!wishlist){
            throw new Error("Wishlist not found for user") ;
        }
        return await WishlistItemRepository.findByWishlistId(wishlist.id);
    },

    async getWishlistItemById(id: string) {
        return await WishlistItemRepository.findById(id);
    },

    async addWishlistItem(userId:string,data: WishlistItem) {

        const wishlist = await WishlistRepository.findByUserId(userId);

        if(!wishlist){
            throw new Error("Wishlist not found for user");
        }
        data.wishlistId = wishlist.id;

        return await WishlistItemRepository.add(data);
    },

    async updateWishlistItem(id: string, data: Partial<WishlistItem>) {
        return await WishlistItemRepository.update(id, data);
    },

    async deleteWishlistItem(id: string) {
        return await WishlistItemRepository.delete(id);
    }

};