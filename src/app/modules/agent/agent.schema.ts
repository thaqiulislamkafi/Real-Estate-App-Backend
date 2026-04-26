
import z from "zod";

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Schema for validating agent data when adding or updating agents.
 * @generated 2026-03-13
 */

export const makeVerifiedSchema = z.object({
    isVerified: z.boolean("isVerified is required")
});

export const makeFraudSchema = z.object({
    isFraud: z.boolean("isFraud is required")
});