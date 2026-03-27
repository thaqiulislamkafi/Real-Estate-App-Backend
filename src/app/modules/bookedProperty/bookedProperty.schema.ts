
import z from "zod";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Schema for validating booked property data
 * @generated 2026-03-26
 */

export const addBookedPropertySchema = z.object({
    propertyId: z.number("Property ID is required"),
    userId: z.string("User ID is required"),
    agentId: z.string("Agent ID is required"),
    proposedAmount: z.string("Proposed amount is required"),
    isPropAmountAccepted: z.boolean().optional(),
    isSold: z.boolean().optional(),
});

export const updateBookedPropertySchema = z.object({

    // here property data can updated as isPropAmountAccepted field update or proposedAmount field update or isSold field update

    userId: z.string("User ID is required"),
    agentId: z.string("Agent ID is required"),
    proposedAmount: z.string("Proposed amount is required").optional(),
    isPropAmountAccepted: z.boolean().optional(),
    isSold: z.boolean().optional(),
});

