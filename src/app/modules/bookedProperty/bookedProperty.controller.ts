
import { Request, Response, NextFunction } from "express";
import { BookedPropertyService } from "./bookedProperty.service";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Controller for handling HTTP requests related to booked properties, utilizing the service layer for business logic.
 * @generated 2026-03-26
 */

export const BookedPropertyController = {

    async getAllBookedProperties(req: Request, res: Response, next: NextFunction) {

        try {
            const bookedProperties = await BookedPropertyService.getAllBookedProperties();
            res.status(200).send({
                success: true,
                message: "Booked properties retrieved successfully",
                data: bookedProperties
            });
        } catch (error) {
            next(error);
        }
    },

    async getBookedPropertiesByUserId(req: Request, res: Response, next: NextFunction) {

        try {

            const userId = req.params.userId;
            const bookedProperties = await BookedPropertyService.getBookedPropertiesByUserId(String(userId));
            res.status(200).send({
                success: true,
                message: "Booked properties retrieved successfully",
                data: bookedProperties
            });
        } catch (error) {
            next(error);
        }
    },

    async getBookedPropertyById(req: Request, res: Response, next: NextFunction) {

        try {
            const id = Number(req.params.id);
            const bookedProperty = await BookedPropertyService.getBookedPropertyById(id);
            res.status(200).send({
                success: true,
                message: "Booked property retrieved successfully",
                data: bookedProperty
            });
        } catch (error) {
            next(error);
        }
    },

    async addBookedProperty(req: Request, res: Response, next: NextFunction) {

        try {
            const bookedProperty = await BookedPropertyService.addBookedProperty(req.body);
            res.status(201).send({
                success: true,
                message: "Booked property added successfully",
                data: bookedProperty
            });
        } catch (error) {
            next(error);
        }
    },

    async updateBookedProperty(req: Request, res: Response, next: NextFunction) {

        // here property data can updated as isPropAmountAccepted field update or proposedAmount field update or isSold field update. So we can update any of these fields by this endpoint.

        try {
            const id = Number(req.params.id);
            const bookedProperty = await BookedPropertyService.updateBookedProperty(id, req.body);
            res.status(200).send({
                success: true,
                message: "Booked property updated successfully",
                data: bookedProperty
            });
        } catch (error) {
            next(error);
        }   
    },
    
    async deleteBookedProperty(req: Request, res: Response, next: NextFunction) {

        try {
            const id = Number(req.params.id);
            const bookedProperty = await BookedPropertyService.deleteBookedProperty(id);
            res.status(200).send({
                success: true,
                message: "Booked property deleted successfully",
                data: bookedProperty
            });
        } catch (error) {
            next(error);
        }   
    }
};