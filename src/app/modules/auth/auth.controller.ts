import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { tokenGeneration } from "../../utils/tokenGeneration";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the controller for the auth module.
 * @generated 2026-03-12
 */

export const AuthController = {

    async getAllUsers(req: Request, res: Response, next: NextFunction) {

        try {

            const result = await AuthService.getAllUsers();
            res.status(200).send({
                success: true,
                message: "Users retrieved successfully",
                data: result
            });
        } catch (error) {
            next(error);
        }
    },

    async getUserById(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const result = await AuthService.getUserById(String(id));
            res.status(200).send({
                success: true,
                message: "User retrieved successfully",
                data: result
            });
        } catch (error) {
            next(error);
        }
    },

    async signUp(req: Request, res: Response, next: NextFunction) {

        try {

            const userData = await AuthService.signUp(req.body);

            const token = tokenGeneration(userData);

            res.status(201).send({
                success: true,
                message: "User generated successfully",
                token: token,
                data: userData
            });

        } catch (error) {
            next(error);
        }
    },

    async signIn(req: Request, res: Response, next: NextFunction) {

        try {

            const result = await AuthService.signIn(req.body);

            const token = tokenGeneration(result);

            res.status(201).send({
                success: true,
                message: "User signed in successfully",
                token: token,
                data: result
            });

        } catch (error) {
            next(error);
        }
    },

    async changeEmail(req: Request, res: Response, next: NextFunction){

         try {

            const id = req.params.id;
            const {email} = req.body ;
            const result = await AuthService.changeEmail(String(id),email);
            res.status(200).send({
                success: true,
                message: "Email Changed Successfully and otp send",
                data: result
            });
        } catch (error) {
            next(error);
        }
    },

    async updateProfile(req: Request, res: Response, next: NextFunction) {

        try {

            const id = req.params.id;
            const result = await AuthService.updateProfile(req.body, String(id));
            res.status(200).send({
                success: true,
                message: "Profile updated successfully",
                data: result
            });
        } catch (error) {
            next(error);
        }
    },

    async updatePassword(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const { password, newPassword } = req.body;
            const result = await AuthService.updatePassword(password, newPassword, String(id));
            res.status(200).send({
                success: true,
                message: "Password updated successfully",
                data: result
            });
        } catch (error) {
            next(error);
        }
    },

    async deleteUser(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const result = await AuthService.deleteUser(String(id));
            res.status(200).send({
                success: true,
                message: "User deleted successfully",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }


}

