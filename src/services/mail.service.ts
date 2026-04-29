import nodemailer from 'nodemailer';
import { mailConfig } from '../config/mail.config';
import { env } from '../config/env.config';

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Service for sending emails, utilizing nodemailer to handle email transport and sending logic, with configuration sourced from environment variables.
 * @generated 2026-03-26
 */

const transporter = nodemailer.createTransport(mailConfig);

export const sendMail = async (to: string, subject: string, html: string) => {
    try {
        
        const info = await transporter.sendMail({
            from: env.EMAIL_SENDER_SMTP_FROM,
            to,
            subject,
            html,
        });
        console.log('Email sent: ' + info.response);

    } catch (error) {
        console.error('Error sending email:', error);
    }
};

