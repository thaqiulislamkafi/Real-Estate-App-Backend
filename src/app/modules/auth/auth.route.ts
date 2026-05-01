
import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validate } from "../../middleware/validate";
import { changeEmailSchema, SignInSchema, SignUpSchema, UpdateProfileSchema } from "./auth.schmea";
import { verifyAuth } from "../../middleware/verifyAuth";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the route definitions for the auth module.
 * @generated 2026-03-12
 */

export const AuthRouter = Router();

AuthRouter.get('/',verifyAuth,AuthController.getAllUsers); 
AuthRouter.get('/:id',verifyAuth,AuthController.getUserById);
AuthRouter.post('/signin',validate(SignInSchema),AuthController.signIn);
AuthRouter.post('/signup',validate(SignUpSchema),AuthController.signUp);
AuthRouter.put('/change-email',validate(changeEmailSchema),AuthController.changeEmail) ;
AuthRouter.put('/update-profile/:id',validate(UpdateProfileSchema),AuthController.updateProfile);
AuthRouter.put('/update-password/:id',AuthController.updatePassword);
AuthRouter.delete('/:id',AuthController.deleteUser);
