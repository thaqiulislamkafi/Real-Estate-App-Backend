
import { WishlistItem } from "../../../generated/prisma/browser";
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

    async getWishlistItemsByUserId(wishlistId: string) {
        return await WishlistItemRepository.findByUserId(wishlistId);
    },

    async getWishlistItemById(id: string) {
        return await WishlistItemRepository.findById(id);
    },

    async addWishlistItem(data: WishlistItem) {
        return await WishlistItemRepository.add(data);
    },

    async updateWishlistItem(id: string, data: Partial<WishlistItem>) {
        return await WishlistItemRepository.update(id, data);
    },

    async deleteWishlistItem(id: string) {
        return await WishlistItemRepository.delete(id);
    }

};