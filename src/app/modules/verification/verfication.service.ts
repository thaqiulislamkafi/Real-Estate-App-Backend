import { Verification } from "../../../generated/prisma/client";
import { VerificationRepository } from "./verification.repository";


export const VerificationService = {

    async addVerfication(data: Verification) {
        const result = await VerificationRepository.addVerfication(data);
        return result;
    },

    async verifyUser(userId: string, otp: string) {
        const result = await VerificationRepository.verifyUser(userId, otp);
        return result;
    }
}