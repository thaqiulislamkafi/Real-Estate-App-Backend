import { Router } from "express";
import { NotificationController } from "./notification.controller";
import { validate } from "../../middleware/validate";
import { addNotificationSchema, updateNotificationSchema } from "./notification.schema";
import { verifyAuth } from "../../middleware/verifyAuth";
import { verifyAdmin } from "../../middleware/verifyAdmin";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Route definitions for notification-related endpoints, connecting HTTP methods to controller actions.
 * @generated 2026-05-05
 */

export const NotificationRouter = Router();

NotificationRouter.get("/",verifyAuth,verifyAdmin, NotificationController.getAllNotifications);
NotificationRouter.get("/:id", NotificationController.getNotificationById);
NotificationRouter.get('/user/:userId',verifyAuth,NotificationController.getNotificationsByUserId) ;
NotificationRouter.post("/", validate(addNotificationSchema), NotificationController.addNotification);
NotificationRouter.put("/:id", validate(updateNotificationSchema), NotificationController.updateNotification);
NotificationRouter.delete("/:id",verifyAuth,verifyAdmin, NotificationController.deleteNotification);
