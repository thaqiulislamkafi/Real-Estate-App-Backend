import { NextFunction, Response } from "express";
import { AuthRequest } from "./verifyAuth";

export const verifyAgent = (req:AuthRequest,res:Response,next:NextFunction) =>{

    if(req.user && req.user.role !== "AGENT"){
        return res.status(403).send({
            success:false,
            message:"Forbidden Access"
        }) ;
    }

    else{
        next() ;
    }
}