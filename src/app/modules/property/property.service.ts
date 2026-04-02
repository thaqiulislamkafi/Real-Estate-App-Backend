import { Property } from "../../../generated/prisma/client";
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

    async getPropertiesById(id: number) {
        return await PropertyRepository.findAllById(id);
    },

    async getPropertyById(id: number) {
        return await PropertyRepository.findById(id);
    },

    async addProperty(data: Property) {
        return await PropertyRepository.add(data);
    },

    async updateProperty(id: number, data: Partial<Property>) {
        return await PropertyRepository.update(id, data);
    },
    
    async deleteProperty(id: number) {
        return await PropertyRepository.delete(id);
     }
};