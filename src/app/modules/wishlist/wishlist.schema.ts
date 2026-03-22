
import z from "zod";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Schema for validating wishlist data when adding or updating wishlists.
 * @generated 2026-03-22
 */

 export const addWishlistSchema = z.object({
    userId: z.string("User ID is required"),
});

