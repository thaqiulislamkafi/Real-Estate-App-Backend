import { User } from "../../generated/prisma/client";
import jwt from "jsonwebtoken";

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Utility function to generate JWT tokens for authenticated users, encapsulating user data and ensuring secure token creation with an expiration time.
 * @generated 2026-04-28
 */

export const tokenGeneration = (data:User): string => {

    const secretKey = process.env.JWT_SECRET_KEY as string;

    const token = jwt.sign({data},`${secretKey}`,{
        expiresIn: "7d"
    })  

    return token;

}