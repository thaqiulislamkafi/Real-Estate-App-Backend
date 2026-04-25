import bcrypt from 'bcrypt'

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains a utility function for hashing passwords using bcrypt.
 * @generated 2026-04-25
 */

export const hashPassword = async (password:string) :Promise<string> =>{

    const saltRounds = 10 ;
    const hashedPassword = await bcrypt.hash(password,saltRounds) ;
    return hashedPassword ;
    
}