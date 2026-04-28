
import { prisma } from "../../../lib/prisma";
import { Verification } from "../../../generated/prisma/browser";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the repository layer for the verification module.
 * @generated 2026-04-28
 */

export const VerificationRepository = {

    async addVerfication(data: Verification) {

        const result = await prisma.verification.upsert({
            where: {
                userId: data.userId
            },
            update: data,
            create: data
        })

        return result;

    },

    async verifyUser(userId: string, otp: string) {

        const result = await prisma.verification.findUnique({
            where: {
                userId: userId
            }
        })

        if (result?.otp === otp) {
            if (result?.expiresAt && result.expiresAt > new Date()) {
                await prisma.user.update({
                    where: {
                        id: userId
                    },
                    data: {
                        emailVerified: true
                    }
                })
                return true;
            }
            else {
                throw new Error("OTP expired");
            }
        }
        else {
            throw new Error("OTP doesn't match");
        }
    }

}