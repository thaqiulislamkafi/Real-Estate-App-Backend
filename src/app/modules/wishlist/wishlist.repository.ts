
import { Wishlist } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Repository for managing wishlists in the database.
 * @generated 2026-03-22
 */

export const WishlistRepository = {

    async findAll() {
        const wishlists = await prisma.wishlist.findMany({
            include: {
                user: true
            }
        });
        return wishlists;
    },

    async findById(id: string) {

        const wishlist = await prisma.wishlist.findUnique({
            where: { id },
            include: {
                user: true
            }
        });
        return wishlist;
    },

    async add(userId: string) {

        const wishlist = await prisma.wishlist.create({
            data : { userId },
            include: {
                user: true
            }
        });
        return wishlist;
    },

    async update(id: string, data: Partial<Wishlist>) {

        const wishlist = await prisma.wishlist.update({
            where: { id },
            data,
            include: {
                user: true
            }
        });
        return wishlist;
    },

    async delete(id: string) {

        const wishlist = await prisma.wishlist.delete({
            where: { id }
        });
        return wishlist;
    }

};