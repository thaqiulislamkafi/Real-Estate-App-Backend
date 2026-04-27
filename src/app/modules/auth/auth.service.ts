import { User } from "../../../generated/prisma/client";
import { otpGenerate } from "../../utils/otpGenerate";
import { sendEmailVerification } from "../../utils/sendEmailVerification";
import { AgentRepository } from "../agent/agent.repository";
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

    async signUp(data: User) {

        let userData ;
        const otp = await otpGenerate();

         if (data.role === "AGENT") {

            userData = await AuthRepository.signUp(data);
            await sendEmailVerification(userData.email, userData.name,otp); 

            if (userData) {
                await AgentRepository.add(userData.id)
            }
            else {
                throw new Error("Agent generation failed");
            }
        }
          else {

            userData = await AuthRepository.signUp(data);
            await sendEmailVerification(userData.email, userData.name,otp); 

            if (userData) {
                await WishlistRepository.add(userData.id);
            }
            else {
                throw new Error("User creation failed");
            }
        }
        
        return userData;
    },

    async signIn(data: {email:string,password:string}) {
        const result = await AuthRepository.signIn(data);
        return result;
    },

    async updateProfile(data: Partial<User>, id: string) {
        const result = await AuthRepository.updateProfile(data, id);
        return result;
    },

    async updatePassword(password: string, newPassword: string, id: string) {
        const result = await AuthRepository.updatePassword(password, newPassword, id);
        return result;
    },

    async deleteUser(id: string) {
        const result = await AuthRepository.deleteUser(id);
        return result;
    }

}