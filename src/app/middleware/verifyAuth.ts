import { NextFunction, Request, Response } from "express";
import { User } from "../../generated/prisma/client";
import jwt from 'jsonwebtoken' ;

export interface AuthenticatedRequest extends Request {
    user: User 
}

export const verifyAuth = (req:AuthenticatedRequest,res:Response,next:NextFunction) =>{

    const token = req.headers.authorization?.split(" ")[1] ;

    if(!token){
        return res.status(401).send({
            success:false,
            message:"Unauthorized Access"
        }) ;
    }

    const secret_key = process.env.JWT_SECRET_KEY as string ; 

    try {

        const decoded = jwt.verify(token,secret_key) as {userId:string} ;
        req.user = {id:decoded.userId} as User ;
        next() ;

    } catch (error) {

        return res.status(401).send({
            success:false,
            message:"Unauthorized Access"
        }) ;
        
    }
}