import { NextFunction, Request, Response } from "express";
import { NotificationService } from "./notification.service";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Controller for managing notifications, handling HTTP requests and responses.
 * @generated 2026-05-05
 */

export const NotificationController = {

    async getAllNotifications(req: Request, res: Response, next: NextFunction) {
        try {
            const notifications = await NotificationService.getAllNotifications();
            res.status(200).send({
                success: true,
                message: "Notifications retrieved successfully",
                data: notifications
            });
        } catch (error) {
            next(error);
        }
    },

    async getNotificationById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const notification = await NotificationService.getNotificationById(String(id));
            res.status(200).send({
                success: true,
                message: "Notification retrieved successfully",
                data: notification
            });
        } catch (error) {
            next(error);
        }
    },

    async addNotification(req: Request, res: Response, next: NextFunction) {
        try {
            const notification = await NotificationService.addNotification(req.body);
            res.status(201).send({
                success: true,
                message: "Notification added successfully",
                data: notification
            });
        } catch (error) {
            next(error);
        }
    },

    async updateNotification(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const notification = await NotificationService.updateNotification(String(id), req.body);
            res.status(200).send({
                success: true,
                message: "Notification updated successfully",
                data: notification
            });
        } catch (error) {
            next(error);
        }
    },

    async deleteNotification(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const notification = await NotificationService.deleteNotification(String(id));
            res.status(200).send({
                success: true,
                message: "Notification deleted successfully",
                data: notification
            });
        } catch (error) {
            next(error);
        }
    }
};
