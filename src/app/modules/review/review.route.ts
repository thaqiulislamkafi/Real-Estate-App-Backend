import { Router } from "express";
import { ReviewController } from "./review.controller";
import { validate } from "../../middleware/validate";
import { addReviewSchema, updateReviewSchema } from "./review.schema";
import { verifyAuth } from "../../middleware/verifyAuth";
import { verifyAdmin } from "../../middleware/verifyAdmin";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Route definitions for review-related endpoints, connecting HTTP methods to controller actions.
 * @generated 2026-03-13
 */

export const ReviewRouter = Router();

ReviewRouter.get("/",verifyAuth,verifyAdmin, ReviewController.getAllReviews);
ReviewRouter.get("/user/:id", ReviewController.getAllReviewsByUserId);
ReviewRouter.get("/property/:id", ReviewController.getAllReviewsByPropertyId);
ReviewRouter.get("/:id",ReviewController.getReviewById);
ReviewRouter.post("/",verifyAuth,validate(addReviewSchema) ,ReviewController.addReview);
ReviewRouter.put("/:id",verifyAuth, validate(updateReviewSchema), ReviewController.updateReview);
ReviewRouter.delete("/:id",verifyAuth, ReviewController.deleteReview);

