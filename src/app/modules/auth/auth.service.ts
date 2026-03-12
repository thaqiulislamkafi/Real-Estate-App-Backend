import { AuthRepository } from "./auth.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the service layer for the auth module.
 * @generated 2024-06-01
 */

export const AuthService = {

    async signUp(data:any) {
        const result = await AuthRepository.signUp(data);
        return result ;
    },

    async signIn(data:any) {
        const result = await AuthRepository.signIn(data);
        return result ;
    },

    async updateProfile(data:any) {
        const result = await AuthRepository.updateProfile(data);
        return result ;
    },

}