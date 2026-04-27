
import ejs from 'ejs';
import path from 'path';

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Utility function to render EJS templates with provided data, used for generating dynamic email content.
 * @generated 2026-03-26
 */

export const renderTemplate = async (templateName: string, data: object): Promise<string> => {

    const templatePath = path.join( process.cwd(),`src/templates/${templateName}.ejs`);

    try {
        const renderedContent = await ejs.renderFile(templatePath, data);
        return renderedContent;
    } catch (error) {
        console.error('Error rendering template:', error);
        throw error;
    }

}