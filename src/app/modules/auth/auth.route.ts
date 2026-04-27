
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

AuthRouter.get('/',AuthController.getAllUsers);
AuthRouter.get('/:id',AuthController.getUserById);
AuthRouter.post('/signin',validate(SignInSchema),AuthController.signIn);
AuthRouter.post('/signup',validate(SignUpSchema),AuthController.signUp);
AuthRouter.put('/update-profile/:id',validate(UpdateProfileSchema),AuthController.updateProfile);
AuthRouter.put('/update-password/:id',AuthController.updatePassword);
AuthRouter.delete('/:id',AuthController.deleteUser);