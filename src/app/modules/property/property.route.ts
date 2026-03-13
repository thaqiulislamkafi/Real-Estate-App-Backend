import { Router } from "express";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the route definitions for the property module.
 * @generated 2026-03-13
 */

export const PropertyRouter = Router();

import { PropertyController } from "./property.controller";
import { validate } from "../../middleware/validate";
import { AuthRouter } from "../auth/auth.route";
import { addPropertySchema } from "./property.schema";

PropertyRouter.get('/',PropertyController.getAllProperties);
PropertyRouter.get('/:id',PropertyController.getPropertyById);
PropertyRouter.post('/',validate(addPropertySchema),PropertyController.addProperty);
PropertyRouter.put('/:id',PropertyController.updateProperty);
PropertyRouter.delete('/:id',PropertyController.deleteProperty);
