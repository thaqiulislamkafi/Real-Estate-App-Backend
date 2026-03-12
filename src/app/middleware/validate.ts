import { NextFunction, Request, Response } from "express"
import z from "zod"

export const validate = (schema:z.ZodObject)=>{

    return (req:Request,res:Response,next:NextFunction) =>{

        const validationResult = schema.safeParse(req.body) ;

        if(!validationResult.success){
            next(validationResult.error)
        } 

        req.body = validationResult.data ;
        next() ;
    }
}