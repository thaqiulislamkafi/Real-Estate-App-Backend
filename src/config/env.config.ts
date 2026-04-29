import z from "zod";
import dotenv from 'dotenv'
dotenv.config()

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Configuration for environment variables, including validation using Zod to ensure all required variables are present and correctly formatted before the application starts.
 * @generated 2026-04-29
 */

const envSchema = z.object({

    PORT : z.string().default('5000'),
    DATABASE_URL : z.string().min(1,'Database url is required'),
    JWT_SECRET_KEY : z.string().min(6,'JWT SECRET KEYmust be 6 characters'),
    EMAIL_SENDER_SMTP_USER : z.string().min(1, 'SMTP user is required'),
    EMAIL_SENDER_SMTP_PASS : z.string().min(1, 'SMTP password is required'),
    EMAIL_SENDER_SMTP_HOST : z.string().min(1, 'SMTP host is required'),
    EMAIL_SENDER_SMTP_PORT : z.string().min(1, 'SMTP port is required'),
    EMAIL_SENDER_SMTP_FROM : z.string().min(1, 'SMTP from email is required'),

}) ;

const parsedEnv = envSchema.safeParse(process.env) ;

if(!parsedEnv.success) {
    console.error('Invalid environment variables') ;
    console.error(parsedEnv.error)
    process.exit(1)
}

export const env = parsedEnv.data