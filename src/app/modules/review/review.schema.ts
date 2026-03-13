import z from "zod";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Schema definitions for validating review data using Zod.
 * @generated 2026-03-13
 */

export const addReviewSchema = z.object({

    rating: z.number("Rating is required").min(1).max(5),
    description: z.string("Comment is required").optional(),
    propertyId: z.number("Property ID is required"),
    userId: z.string("User ID is required")

});

export const updateReviewSchema = z.object({

    rating: z.number("Rating is required").min(1).max(5).optional(),
    description: z.string("Comment is required").optional(),
    propertyId: z.number("Property ID is required").optional(),
    userId: z.string("User ID is required").optional()
    
});

