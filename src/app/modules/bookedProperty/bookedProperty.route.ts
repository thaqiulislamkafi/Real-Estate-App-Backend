
import { Router } from "express";
import { BookedPropertyController } from "./bookedProperty.controller";
import { validate } from "../../middleware/validate";
import { addBookedPropertySchema, updateBookedPropertySchema } from "./bookedProperty.schema";

/** * @author Thaqi Ul Islam Kafi
 * @description Router for handling HTTP routes related to booked properties, connecting endpoints to the controller methods.
 * @generated 2026-03-26
 */

export const BookedPropertyRouter = Router();

BookedPropertyRouter.get('/',BookedPropertyController.getAllBookedProperties);
BookedPropertyRouter.get('/:id',BookedPropertyController.getBookedPropertyById);
BookedPropertyRouter.get('/user/:userId',BookedPropertyController.getBookedPropertiesByUserId);
BookedPropertyRouter.post('/',validate(addBookedPropertySchema),BookedPropertyController.addBookedProperty);
BookedPropertyRouter.put('/:id',validate(updateBookedPropertySchema),BookedPropertyController.updateBookedProperty);
BookedPropertyRouter.delete('/:id',BookedPropertyController.deleteBookedProperty);