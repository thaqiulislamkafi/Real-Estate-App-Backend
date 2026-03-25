import { WishlistRepository } from "../wishlist/wishlist.repository";
import { WishlistService } from "../wishlist/wishlist.service";
import { AuthRepository } from "./auth.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the service layer for the auth module.
 * @generated 2026-03-12
 */

export const AuthService = {

    async signUp(data:any) {

        const userData = await AuthRepository.signUp(data);

        if(userData) {
            await WishlistRepository.add(userData.id);
        }
        else {
            throw new Error("User creation failed");
        }

        return userData ;
    },

    async signIn(data:any) {
        const result = await AuthRepository.signIn(data);
        return result ;
    },

    async updateProfile(data:any,id:string) {
        const result = await AuthRepository.updateProfile(data,id);
        return result ;
    },

}