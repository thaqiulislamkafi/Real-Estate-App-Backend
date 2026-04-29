
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