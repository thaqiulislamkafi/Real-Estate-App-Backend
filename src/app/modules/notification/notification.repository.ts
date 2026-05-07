import { Notification } from "../../../generated/prisma/client";
import { NotificationCreateInput } from "../../../generated/prisma/models";
import { prisma } from "../../../lib/prisma";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Repository for managing notifications in the database.
 * @generated 2026-05-05
 */

export const NotificationRepository = {

  async findAll() {
    const notifications = await prisma.notification.findMany({
    });
    return notifications;
  },

  async findById(id: string) {
    const notification = await prisma.notification.findUnique({
      where: { id },
    });
    return notification;
  },

  async findByUserId(id:string){

    const notifications = await prisma.notification.findMany({
      where : {
        receiverId : id
      }
    })
    
    return notifications ;

  },

  async add(data: NotificationCreateInput) {
    const notification = await prisma.notification.create({ data });
    return notification;
  },

  async update(id: string, data: Partial<Notification>) {
    const notification = await prisma.notification.update({
      where: { id },
      data,
    });
    return notification;
  },

  async delete(id: string) {
    const notification = await prisma.notification.delete({
      where: { id },
    });
    return notification;
  },
};
