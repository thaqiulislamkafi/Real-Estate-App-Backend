
import { Request, Response, NextFunction } from "express";
import { SoldPropertyService } from "./soldProperty.service";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Controller for managing sold properties, handling HTTP requests and responses.
 * @generated 2026-03-27
 */

export const SoldPropertyController = {

    async getAllSoldProperties(req: Request, res: Response, next: NextFunction) {

        try {
            const soldProperties = await SoldPropertyService.getAllSoldProperties();
            res.status(200).send({
                success: true,
                message: "Sold properties retrieved successfully",
                data: soldProperties
            });
        } catch (error) {
            next(error);
        }
    },

    async getSoldPropertiesByUserId(req: Request, res: Response, next: NextFunction) {

        try {
            const userId = req.params.userId;
            const soldProperties = await SoldPropertyService.getSoldPropertiesByUserId(String(userId));
            res.status(200).send({
                success: true,
                message: "Sold properties retrieved successfully",
                data: soldProperties
            });
        } catch (error) {
            next(error);
        }
    },

    async getSoldPropertyById(req: Request, res: Response, next: NextFunction) {

        try {
            const id = Number(req.params.id);
            const soldProperty = await SoldPropertyService.getSoldPropertyById(id);
            res.status(200).send({
                success: true,
                message: "Sold property retrieved successfully",
                data: soldProperty
            });
        } catch (error) {
            next(error);
        }
    },

    async addSoldProperty(req: Request, res: Response, next: NextFunction) {

        try {
            const soldProperty = await SoldPropertyService.addSoldProperty(req.body);
            res.status(201).send({
                success: true,
                message: "Sold property added successfully",
                data: soldProperty
            });
        } catch (error) {
            next(error);
        }
    },

    async updateSoldProperty(req: Request, res: Response, next: NextFunction) {

        try {
            const id = Number(req.params.id);
            const soldProperty = await SoldPropertyService.updateSoldProperty(id, req.body);
            res.status(200).send({
                success: true,
                message: "Sold property updated successfully",
                data: soldProperty
            });
        } catch (error) {
            next(error);
        }
    },

    async deleteSoldProperty(req: Request, res: Response, next: NextFunction) {

        try {
            const id = Number(req.params.id);
            const soldProperty = await SoldPropertyService.deleteSoldProperty(id);
            res.status(200).send({
                success: true,
                message: "Sold property deleted successfully",
                data: soldProperty
            });
        } catch (error) {
            next(error);
        }
    }
};