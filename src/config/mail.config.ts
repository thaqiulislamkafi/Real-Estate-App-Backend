
import { env } from './env.config';

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Configuration for email sending, including SMTP settings and authentication details, sourced from environment variables.
 * @generated 2026-03-16
 */

export const mailConfig = {
    secure: true,
    auth: {
        user: env.EMAIL_SENDER_SMTP_USER,
        pass: env.EMAIL_SENDER_SMTP_PASS,
    },
    host: env.EMAIL_SENDER_SMTP_HOST,
    port: Number(env.EMAIL_SENDER_SMTP_PORT),

};