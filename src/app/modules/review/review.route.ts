import { Router } from "express";
import { ReviewController } from "./review.controller";
import { validate } from "../../middleware/validate";
import { addReviewSchema, updateReviewSchema } from "./review.schema";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Route definitions for review-related endpoints, connecting HTTP methods to controller actions.
 * @generated 2026-03-13
 */

export const ReviewRouter = Router();

ReviewRouter.get("/", ReviewController.getAllReviews);
ReviewRouter.get("/:id",ReviewController.getReviewById);
ReviewRouter.post("/",validate(addReviewSchema) ,ReviewController.addReview);
ReviewRouter.put("/:id", validate(updateReviewSchema), ReviewController.updateReview);
ReviewRouter.delete("/:id", ReviewController.deleteReview);

