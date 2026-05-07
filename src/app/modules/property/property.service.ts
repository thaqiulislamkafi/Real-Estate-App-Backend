import { Property } from "../../../generated/prisma/client";
import { NotificationService } from "../notification/notification.service";
import { PropertyRepository } from "./property.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Service for managing properties, providing business logic and interacting with the repository.
 * @generated 2026-03-13
 */

export const PropertyService = {

    async getAllProperties() {
        return await PropertyRepository.findAll();
    },

    async getPropertiesById(id: string) {
        return await PropertyRepository.findAllByAgentId(id);
    },

    async getPropertyById(id: number) {
        return await PropertyRepository.findById(id);
    },

    async addProperty(data: Property) {

        const result = await PropertyRepository.add(data);

        await NotificationService.addNotification({
            title: 'Property Added',
            message: `New Property ${result.title} is added`,
            receiverRole: 'ADMIN',
        });

        return result;
    },

    async updateProperty(id: number, data: Partial<Property>) {
        return await PropertyRepository.update(id, data);
    },

    async deleteProperty(id: number) {
        return await PropertyRepository.delete(id);
    }
};