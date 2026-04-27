import { sendMail } from "../../services/mail.service";
import { renderTemplate } from "./rendertemplate";

export const sendEmailVerification = async (email: string, name: string,otp:string) => {

    try {

        const htmlContent = await renderTemplate('verifyEmail', { name,otp });
        await sendMail(email, 'Email Verification', htmlContent);
   
    } catch (error) {
        console.error('Error sending email verification:', error);
    }

}