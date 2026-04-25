import { NextFunction, Response } from "express";
import { AuthRequest } from "./verifyAuth";

export const verifyAdmin = (req:AuthRequest,res:Response,next:NextFunction) =>{

    if(req.user.role !== "ADMIN"){
        return res.status(403).send({
            success:false,
            message:"Forbidden Access"
        }) ;
    }
    
    else{
        next() ;
    }

}