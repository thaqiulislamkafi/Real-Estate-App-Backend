
import { z } from "zod";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Schema for validating wishlist item data.
 * @generated 2026-03-25
 */

export const addWishlistItemSchema = z.object({
    wishlistId: z.string("Wishlist ID is required"),
    propertyId: z.number("Property ID is required"),
    agentId: z.string("Agent ID is required"),
});

export const updateWishlistItemSchema = z.object({
    id: z.string("Wishlist Item ID is required"),
    wishlistId: z.string("Wishlist ID is required").optional(),
    propertyId: z.number("Property ID is required").optional(),
    agentId: z.string("Agent ID is required").optional(),
});