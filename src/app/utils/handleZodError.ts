
import { ZodError } from "zod";

export const handleZodError = (err:ZodError)=>{

        const formattedErrors = err.issues.map((issue) => {

            const field = issue.path.join(".");
            let message = issue.message ;

            if (issue.code === "invalid_type") {
                message = `${field} must be ${issue.expected}`;
            }

            return {
                message,
                field
            };
        });

        const simpleMessage = formattedErrors.map((e)=>e.message)
                                             .join(", ") ;

        return {
            message : simpleMessage,
            errors : formattedErrors
        }
    }
