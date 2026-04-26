import { sendMail } from "../../services/mail.service";
import { renderTemplate } from "./rendertemplate";

export const sendEmailVerification = async (email: string, name: string) => {

    try {

        const htmlContent = await renderTemplate('verifyEmail', { name });
        await sendMail(email, 'Email Verification', htmlContent);
   
    } catch (error) {
        console.error('Error sending email verification:', error);
    }

}