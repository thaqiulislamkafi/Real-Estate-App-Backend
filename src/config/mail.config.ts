import dotenv from 'dotenv';
dotenv.config();

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Configuration for email sending, including SMTP settings and authentication details, sourced from environment variables.
 * @generated 2026-03-16
 */

export const mailConfig = {
    secure: true,
    auth: {
        user: process.env.EMAIL_SENDER_SMTP_USER,
        pass: process.env.EMAIL_SENDER_SMTP_PASS,
    },
    host: process.env.EMAIL_SENDER_SMTP_HOST,
    port: Number(process.env.EMAIL_SENDER_SMTP_PORT),

};