import { Review } from "../../../generated/prisma/client";
import { NotificationService } from "../notification/notification.service";
import { ReviewRepository } from "./review.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Service for managing reviews, providing business logic and interaction with the repository.
 * @generated 2026-03-13
 */

export const ReviewService = {

    async getAllReviews() {
        return await ReviewRepository.findAll();
    },

    async getAllReviewsByUserId(id: string) {
        return await ReviewRepository.findAllById(id);
    },

    async getAllReviewsByPropertyId(id: number) {
        return await ReviewRepository.findAllByPropertyId(id);
    },

    async getReviewById(id: string) {
        return await ReviewRepository.findById(id);
    },

    async addReview(data: Review) {

        const result = await ReviewRepository.add(data) ;

        await NotificationService.addNotification({
                    title: 'New Review Added',
                    message: `${result.user.name} reviewed in ${result.property.title} property`,
                    receiverRole: 'ADMIN',
                });

        return result ;
    },

    async updateReview(id: string, data: Partial<Review>) {
        return await ReviewRepository.update(id, data);
    },

    async deleteReview(id: string) {
        return await ReviewRepository.delete(id);
    }
}

