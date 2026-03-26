
import { WishlistItem } from "../../../generated/prisma/browser";
import { prisma } from "../../../lib/prisma"

/**
 * @author Thaqi Ul Islam Kafi
 * @description Repository for managing wishlist items in the database.
 * @generated 2026-03-25
 */

export const WishlistItemRepository = {

    async findAll() {
        const wishlistItems = await prisma.wishlistItem.findMany({
            include: {
                property: true,
                agent: true
            }
        });
        return wishlistItems;
    },

    async findByUserId(wishlistId: string) {
        const wishlistItems = await prisma.wishlistItem.findMany({
            where: { wishlistId: wishlistId },
            include: {
                property: true,
                agent: true
            }
        });
        return wishlistItems;
    },


    async findById(id: string) {
        const wishlistItem = await prisma.wishlistItem.findUnique({
            where: { id },
            include: {
                property: true,
                agent: true
            }
        });
        return wishlistItem;
    },

    async add(data:WishlistItem) {
        const wishlistItem = await prisma.wishlistItem.create({
            data
        });
        return wishlistItem;
    },

    async update(id: string, data: Partial<WishlistItem>) {
        const wishlistItem = await prisma.wishlistItem.update({
            where: { id },
            data,
            
        });
        return wishlistItem;
    },

    async delete(id: string) {
        const wishlistItem = await prisma.wishlistItem.delete({
            where: { id }
        });
        return wishlistItem;
    }

};