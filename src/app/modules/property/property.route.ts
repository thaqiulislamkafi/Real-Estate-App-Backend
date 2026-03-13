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

AuthRouter.get('/',PropertyController.getAllProperties);
AuthRouter.get('/:id',PropertyController.getPropertyById);
AuthRouter.post('/',validate(addPropertySchema),PropertyController.addProperty);
AuthRouter.put('/:id',PropertyController.updateProperty);
AuthRouter.delete('/:id',PropertyController.deleteProperty);
