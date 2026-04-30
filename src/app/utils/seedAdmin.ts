import { env } from "../../config/env.config"
import { prisma } from "../../lib/prisma";
import { hashPassword } from "./hashPassword";

export const seedAdmin = async()=>{

    try {
        
        const adminEmail = env.ADMIN_EMAIL ;
        const adminPassword = env.ADMIN_PASSWORD ;
        const adminName = env.ADMIN_NAME ;

        const ifAdminExist = await prisma.user.findFirst({
            where : {
                email : adminEmail,
            }
        })

         if(ifAdminExist){
                console.log("Admin already exist in database");
                return ;
            }

        const hashedPassword = await hashPassword(adminPassword) ;

        await prisma.user.create({
            data : {
                email : adminEmail,
                name : adminName,
                password : hashedPassword,
                emailVerified : true,
                role : "ADMIN"
            }
        })

    } catch (error) {
        console.error('Admin seeding error',error)
    }

}