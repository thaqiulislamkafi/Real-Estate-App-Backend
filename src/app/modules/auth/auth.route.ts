
import { Router } from "express";
import { AuthController } from "./auth.controller";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the route definitions for the auth module.
 * @generated 2024-06-01
 */

export const AuthRouter = Router();

AuthRouter.post('/signin',AuthController.signIn);
AuthRouter.post('/signup',AuthController.signUp);
AuthRouter.put('/update-profile',AuthController.updateProfile);