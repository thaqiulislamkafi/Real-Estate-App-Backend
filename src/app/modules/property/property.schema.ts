import z from "zod";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Schema for validating property data when adding or updating properties.
 * @generated 2026-03-13
 */

export const addPropertySchema = z.object({

    agentId: z.string("Agent ID is required"),
    title: z.string("Title is required").min(3, "Title must be at least 3 characters long"),
    description: z.string("Description is required").min(10, "Description must be at least 10 characters long"),
    imageUrl: z.url("Image URL is required"),
    location: z.string("Location is required").min(3, "Location must be at least 3 characters long"),
    priceRange: z.string("Price range is required").min(3, "Price range must be at least 3 characters long"),
    propertyType: z.enum(["APARTMENT", "LAND", "HOUSE", "COMMERCIAL"], "Invalid property type"),

});

export const updatePropertySchema = z.object({

    title: z.string("Title is required").min(3, "Title must be at least 3 characters long").optional(),
    description: z.string("Description is required").min(10, "Description must be at least 10 characters long").optional(),
    imageUrl: z.url("Image URL is required").optional(),
    location: z.string("Location is required").min(3, "Location must be at least 3 characters long").optional(),
    priceRange: z.string("Price range is required").min(3, "Price range must be at least 3 characters long").optional(),
    propertyType: z.enum(["APARTMENT", "LAND", "HOUSE", "COMMERCIAL"], "Invalid property type").optional(),
});