import { prisma } from "../../../lib/prisma";
import { User } from "../../../generated/prisma/client";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the repository layer for the auth module.
 * @generated 2026-03-12
 */

export const AuthRepository = {

    async getAllUsers() {

        const result = await prisma.user.findMany();
        return result ;
    },

    async signUp(data:User) {

        const result = await prisma.user.create({
            data : data
        })

        return result ;
    },

    async signIn(data:{email:string,password:string}) {

        const result = await prisma.user.findFirst({
            where : {
                email : data.email,
                password : data.password
            }
        })
        return result ;

    },

    async updateProfile(data:User,id:string) {

        const result = await prisma.user.update({
            where : {
                id : id
            },
            data : data
        })
        return result ;
    }

}