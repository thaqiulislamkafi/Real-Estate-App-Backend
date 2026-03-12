import z from "zod";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the validation schema for the auth module.
 * @generated 2026-03-12
 **/

export const SignUpSchema = z.object({

    name : z.string("Name is required").min(3,"Name must be at least 3 characters long"),
    email : z.email("Invalid email address"),
    password : z.string("Password is required").min(6,"Password must be at least 6 characters long"),
    image : z.string().optional(),
    contactNumber : z.string().optional(),
    address : z.string().optional(),

})