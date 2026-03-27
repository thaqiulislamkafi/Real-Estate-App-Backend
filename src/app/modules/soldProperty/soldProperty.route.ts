
import { Router } from "express";
import { SoldPropertyController } from "./soldProperty.controller";
import { validate } from "../../middleware/validate";
import { addSoldPropertySchema, updateSoldPropertySchema } from "./soldProperty.schema";

/** * @author Thaqi Ul Islam Kafi
 * @description Router for handling HTTP routes related to sold properties, connecting endpoints to the controller methods.
 * @generated 2026-03-27
 */

export const SoldPropertyRouter = Router();

SoldPropertyRouter.get('/',SoldPropertyController.getAllSoldProperties);
SoldPropertyRouter.get('/:id',SoldPropertyController.getSoldPropertyById);
SoldPropertyRouter.get('/user/:userId',SoldPropertyController.getSoldPropertiesByUserId);
SoldPropertyRouter.post('/',validate(addSoldPropertySchema),SoldPropertyController.addSoldProperty);
SoldPropertyRouter.put('/:id',validate(updateSoldPropertySchema),SoldPropertyController.updateSoldProperty);
SoldPropertyRouter.delete('/:id',SoldPropertyController.deleteSoldProperty);