
import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validate } from "../../middleware/validate";
import { SignInSchema, SignUpSchema, UpdateProfileSchema } from "./auth.schmea";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the route definitions for the auth module.
 * @generated 2026-03-12
 */

export const AuthRouter = Router();

AuthRouter.post('/signin',validate(SignInSchema),AuthController.signIn);
AuthRouter.post('/signup',validate(SignUpSchema),AuthController.signUp);
AuthRouter.put('/update-profile',validate(UpdateProfileSchema),AuthController.updateProfile);