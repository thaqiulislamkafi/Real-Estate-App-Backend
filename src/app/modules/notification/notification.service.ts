import { Notification } from "../../../generated/prisma/client";
import { NotificationCreateInput } from "../../../generated/prisma/models";
import { NotificationRepository } from "./notification.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Service for managing notifications, providing business logic and interaction with the repository.
 * @generated 2026-05-05
 */
export const NotificationService = {

    async getAllNotifications() {
        return await NotificationRepository.findAll();
    },

    async getNotificationById(id: string) {
        return await NotificationRepository.findById(id);
    },

    async addNotification(data: NotificationCreateInput) {
        return await NotificationRepository.add(data);
    },

    async updateNotification(id: string, data: Partial<Notification>) {
        return await NotificationRepository.update(id, data);
    },

    async deleteNotification(id: string) {
        return await NotificationRepository.delete(id);
    }
};
