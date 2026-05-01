/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";
import { ZodError } from "zod"
import { handleZodError } from "../utils/handleZodError";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Global error handling middleware to catch and handle errors across the application.
 * @generated 2026-03-11
 */

export const GlobalHandleError = (err:any, req:Request, res:Response, next:NextFunction) => {

    let statusCode:number = 500 ;
    let errorMessage:string = 'Internal Server Error' ;
    let errorDetails = err ;
    
    if(err instanceof ZodError) {

        statusCode = 400 ;

        const zodErrorResult = handleZodError(err)
        errorMessage = zodErrorResult.message ;
        errorDetails = zodErrorResult.errors
        
    }

    if((err) instanceof Prisma.PrismaClientKnownRequestError){

        if(err.code === 'P2025'){
            errorMessage = "Record Not Found"
        }

        else if(err.code === 'P2003'){
            errorMessage = `Foreign key constraint Failed `
        }

        else if(err.code === 'P2002'){
            errorMessage = `Unique constraint failed on the constraint`
        }
    }

    else if((err) instanceof Prisma.PrismaClientValidationError){
        errorMessage = "Field doesn't match"

    }

    console.log(err)
    res.status(statusCode).send({
        success : false,
        errorCode : err.code,
        message : errorMessage,
        error : errorDetails
    })
}