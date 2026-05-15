import { Router } from "express";

/**
 * @author Thaqi Ul Islam Kafi
 * @description This file contains the route definitions for the property module.
 * @generated 2026-03-13
 */

export const PropertyRouter = Router();

import { PropertyController } from "./property.controller";
import { validate } from "../../middleware/validate";
import { addPropertySchema } from "./property.schema";
import { verifyAuth } from "../../middleware/verifyAuth";

PropertyRouter.get('/',verifyAuth,PropertyController.getAllProperties);
PropertyRouter.get('/agent/:id',PropertyController.getPropertiesByAgentId);
PropertyRouter.get('/:id',verifyAuth,PropertyController.getPropertyById);
PropertyRouter.post('/',verifyAuth,validate(addPropertySchema),PropertyController.addProperty);
PropertyRouter.put('/:id',verifyAuth,PropertyController.updateProperty);
PropertyRouter.delete('/:id',verifyAuth,PropertyController.deleteProperty);
