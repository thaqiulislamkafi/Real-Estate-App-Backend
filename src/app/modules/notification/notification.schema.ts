import z from "zod";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Schema definitions for validating notification data using Zod.
 * @generated 2026-05-05
 */

export const addNotificationSchema = z.object({
    title: z.string("Title is required").min(1, "Title cannot be empty"),
    message: z.string("Message is required").min(1, "Message cannot be empty"),
    receiverId: z.string("Receiver ID is required").optional(),
    receiverRole: z.string("Receiver role is required"),
});

export const updateNotificationSchema = z.object({
    title: z.string("Title is required").min(1, "Title cannot be empty").optional(),
    message: z.string("Message is required").min(1, "Message cannot be empty").optional(),
    receiverId: z.string("Receiver ID is required").optional(),
    receiverRole: z.string("Receiver role is required").optional(),
});
