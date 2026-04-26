import bcrypt from 'bcrypt' ;

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains a utility function for comparing passwords using bcrypt.
 * @generated 2026-04-25
 */

export const comparePassword = async (password:string,hashedPassword:string) :Promise<boolean> =>{

    const isMatch = await bcrypt.compare(password,hashedPassword) ;
    return isMatch ;

}