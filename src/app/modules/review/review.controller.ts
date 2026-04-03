import { NextFunction, Request, Response } from "express";
import { ReviewService } from "./review.service";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Controller for managing reviews, handling HTTP requests and responses.
 * @generated 2026-03-13
 */

export const ReviewController = {

    async getAllReviews(req: Request, res: Response, next: NextFunction) {

        try {
            const reviews = await ReviewService.getAllReviews();
            res.status(200).send({
                success: true,
                message: "Reviews retrieved successfully",
                data: reviews
            });
            
        } catch (error) {
            next(error);
        }
    },

    async getAllReviewsByUserId(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const reviews = await ReviewService.getAllReviewsByUserId(String(id));
            res.status(200).send({
                success: true,
                message: "Reviews retrieved successfully",
                data: reviews
            });

        } catch (error) {
            next(error);
        }
    },
    
    async getAllReviewsByPropertyId(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const reviews = await ReviewService.getAllReviewsByPropertyId(Number(id));
            res.status(200).send({
                success: true,
                message: "Reviews retrieved successfully",
                data: reviews
            });

        } catch (error) {
            next(error);
        }
    },


    async getReviewById(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const review = await ReviewService.getReviewById(String(id));
            res.status(200).send({
                success: true,
                message: "Review retrieved successfully",
                data: review
            });

        } catch (error) {
            next(error);
        }
    },

    async addReview(req: Request, res: Response, next: NextFunction) {

        try {
            const review = await ReviewService.addReview(req.body);
            res.status(201).send({
                success: true,
                message: "Review added successfully",
                data: review
            });
        } catch (error) {
            next(error);
        }
    },

    async updateReview(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const review = await ReviewService.updateReview(String(id), req.body);
            res.status(200).send({
                success: true,
                message: "Review updated successfully",
                data: review
            });

        } catch (error) {
            next(error);
        }
    },

    async deleteReview(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const review = await ReviewService.deleteReview(String(id));
            res.status(200).send({
                success: true,
                message: "Review deleted successfully",
                data: review
            });

        } catch (error) {
            next(error);
        }
    }

}