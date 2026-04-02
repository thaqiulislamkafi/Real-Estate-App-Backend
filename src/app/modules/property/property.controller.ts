import { NextFunction, Request, Response } from "express";
import { PropertyService } from "./property.service";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Controller for managing properties, handling HTTP requests and responses.
 * @generated 2026-03-13
 */

export const PropertyController = {

    async getAllProperties(req: Request, res: Response, next: NextFunction) {

        try {
            const properties = await PropertyService.getAllProperties();
            res.status(200).send({
                success: true,
                message: "Properties retrieved successfully",
                data: properties
            });
        } catch (error) {
            next(error);
        }
    },

    async getPropertiesById(req: Request, res: Response, next: NextFunction) {

        try {

            const id = Number(req.params.id);
            const properties = await PropertyService.getPropertiesById(id);
            res.status(200).send({
                success: true,
                message: "Properties retrieved successfully",
                data: properties
            });
        } catch (error) {
            next(error);
        }
    },

    async getPropertyById(req: Request, res: Response, next: NextFunction) {

        try {
            const id = Number(req.params.id);
            const property = await PropertyService.getPropertyById(id);
            res.status(200).send({
                success: true,
                message: "Property retrieved successfully",
                data: property
            });
        } catch (error) {
            next(error);
        }
    },

    async addProperty(req: Request, res: Response, next: NextFunction) {

        try {
            const property = await PropertyService.addProperty(req.body);
            res.status(201).send({
                success: true,
                message: "Property added successfully",
                data: property
            });
        } catch (error) {
            next(error);
        }
    },

    async updateProperty(req: Request, res: Response, next: NextFunction) {

        try {
            const id = Number(req.params.id);
            const property = await PropertyService.updateProperty(id, req.body);
            res.status(200).send({
                success: true,
                message: "Property updated successfully",
                data: property
            });
        } catch (error) {
            next(error);
        }
    },

    async deleteProperty(req: Request, res: Response, next: NextFunction) {

        try {
            const id = Number(req.params.id);
            const property = await PropertyService.deleteProperty(id);
            res.status(200).send({
                success: true,
                message: "Property deleted successfully",
                data: property
            });
        } catch (error) {
            next(error);
        }
    }
};