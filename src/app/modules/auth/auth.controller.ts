import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the controller for the auth module.
 * @generated 2026-03-12
 */

export const AuthController = {

    async signUp(req: Request, res: Response, next: NextFunction) {

        try {
            const result = await AuthService.signUp(req.body);
            res.status(201).send({
                success: true,
                message: "User created successfully",
                data: result
            });

        } catch (error) {
            next(error);
        }
    },

    async signIn(req: Request, res: Response, next: NextFunction) {

        try {

            const result = await AuthService.signIn(req.body);
            res.status(201).send({
                success: true,
                message: "User signed in successfully",
                data: result
            });

        } catch (error) {
            next(error);
        }
    },

    async updateProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await AuthService.updateProfile(req.body);
            res.status(200).send({
                success: true,
                message: "Profile updated successfully",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

}

