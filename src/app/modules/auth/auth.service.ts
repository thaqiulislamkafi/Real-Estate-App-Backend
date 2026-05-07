import { User } from "../../../generated/prisma/client";
import { ExpireTime } from "../../utils/makeExpireTime";
import { otpGenerate } from "../../utils/otpGenerate";
import { sendEmailVerification } from "../../utils/sendEmailVerification";
import { AgentRepository } from "../agent/agent.repository";
import { NotificationService } from "../notification/notification.service";
import { VerificationService } from "../verification/verfication.service";
import { WishlistRepository } from "../wishlist/wishlist.repository";
import { AuthRepository } from "./auth.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the service layer for the auth module.
 * @generated 2026-03-12
 */

export const AuthService = {

    async getAllUsers() {

        const result = await AuthRepository.getAllUsers();
        return result ;
    },

    async getUserById(id: string) {

        const result = await AuthRepository.getUserById(id);
        return result ;
    },

    async signUp(data: User) {

        let userData ;
        const otp = await otpGenerate();
        const expiresTime = ExpireTime();

         if (data.role === "AGENT") {

            userData = await AuthRepository.signUp(data);
            await sendEmailVerification(userData.email, userData.name,otp); 

            await VerificationService.addVerfication({
                id: crypto.randomUUID(),
                userId: userData.id,
                otp: otp,
                expiresAt: expiresTime,
                generatedAt: new Date(),
                updatedAt: new Date()
            });

            if (userData) {
                await AgentRepository.add(userData.id)
            }
            else {
                throw new Error("Agent generation failed");
            }

            await NotificationService.addNotification({
                title : 'New Agent Registrated',
                message : `${userData.name} is new registrated as Agent in our app`,
                receiverRole : 'ADMIN'
            })

        }
          else {

            userData = await AuthRepository.signUp(data);
            await sendEmailVerification(userData.email, userData.name,otp); 

            await VerificationService.addVerfication({
                id: crypto.randomUUID(),
                userId: userData.id,
                otp: otp,
                expiresAt: expiresTime,
                generatedAt: new Date(),
                updatedAt: new Date()
            });

            if (userData) {
                await WishlistRepository.add(userData.id);
            }
            else {
                throw new Error("User creation failed");
            }

            await NotificationService.addNotification({
                title : 'New User Registrated',
                message : `${userData.name} is new user registrated in our app`,
                receiverRole : 'ADMIN'
            })
        }
        
        return userData;
    },

    async signIn(data: {email:string,password:string}) {
        const result = await AuthRepository.signIn(data);
        return result;
    },

    async changeEmail (id:string,email:string){

        const otp = await otpGenerate() ;
        const expiresTime = ExpireTime() ;

        const result = await AuthRepository.changeEmail(id,email);

        await sendEmailVerification(email,result.name,otp) ;

        await VerificationService.addVerfication({
                id: crypto.randomUUID(),
                userId: result.id,
                otp: otp,
                expiresAt: expiresTime,
                generatedAt: new Date(),
                updatedAt: new Date()
            });

        await NotificationService.addNotification({
                title : 'Changing Email',
                message : `${result.name} changed his email`,
                receiverRole : 'ADMIN'
            })

        return result ;
    },

    async updateProfile(data: Partial<User>, id: string) {
        const result = await AuthRepository.updateProfile(data, id);
        return result;
    },

    async updatePassword(password: string, newPassword: string, id: string) {
        const result = await AuthRepository.updatePassword(password, newPassword, id);

        await NotificationService.addNotification({
                title : 'Changing Password',
                message : `${result.name} changed his password`,
                receiverRole : 'ADMIN'

            })

        return result;
    },

    async deleteUser(id: string) {

        const result = await AuthRepository.deleteUser(id);

        await NotificationService.addNotification({
                title : 'User Deleted',
                message : `${result.name} deleted by Admin`,
                receiverRole : 'ADMIN'

            })

        return result;
    }

}