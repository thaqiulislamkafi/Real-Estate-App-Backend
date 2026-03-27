
import { z } from "zod";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Schema for validating sold property data
 * @generated 2026-03-27
 */

export const addSoldPropertySchema = z.object({
    bookedPropertyId: z.number("Booked property ID is required"),
    propertyId: z.number("Property ID is required"),
    userId: z.string("User ID is required"),
    agentId: z.string("Agent ID is required"),
    amount: z.string("Amount is required")
});


export const updateSoldPropertySchema = z.object({
    bookedPropertyId: z.number("Booked property ID is required").optional(),
    propertyId: z.number("Property ID is required").optional(),
    userId: z.string("User ID is required").optional(),
    agentId: z.string("Agent ID is required").optional(),
    amount: z.string("Amount is required").optional()
});
