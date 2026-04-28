
/**
 * export const AuthRouter = Router();
 
 AuthRouter.get('/',AuthController.getAllUsers);
 AuthRouter.get('/:id',AuthController.getUserById);
 AuthRouter.post('/signin',validate(SignInSchema),AuthController.signIn);
 AuthRouter.post('/signup',validate(SignUpSchema),AuthController.signUp);
 AuthRouter.put('/update-profile/:id',validate(UpdateProfileSchema),AuthController.updateProfile);
 AuthRouter.put('/update-password/:id',AuthController.updatePassword);
 AuthRouter.delete('/:id',AuthController.deleteUser);
 */

import { Router } from "express";
import { VerificationController } from "./verfication.controller";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the route definitions for the verification module.
 * @generated 2026-04-28
 */

export const VerificationRouter = Router();

VerificationRouter.post('/',VerificationController.addVerfication);
VerificationRouter.post('/verify-user/:userId',VerificationController.verifyUser);