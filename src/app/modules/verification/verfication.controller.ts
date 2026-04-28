
import { Request, Response, NextFunction } from "express";
import { VerificationService } from "./verfication.service";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the controller for the verification module.
 * @generated 2026-04-28
 */

export const VerificationController = {

    async addVerfication(req: Request, res: Response, next: NextFunction) {

        try {
            const result = await VerificationService.addVerfication(req.body);
            res.status(201).send({
                success: true,
                message: "Verification added successfully",
                data: result
            });
        } catch (error) {
            next(error);
        }   

    },

    async verifyUser(req: Request, res: Response, next: NextFunction) {

        try {
            const { otp } = req.body;
            const userId = req.params.userId;
            const result = await VerificationService.verifyUser(String(userId), String(otp));
            res.status(200).send({
                success: true,
                message: "User verified successfully",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

}