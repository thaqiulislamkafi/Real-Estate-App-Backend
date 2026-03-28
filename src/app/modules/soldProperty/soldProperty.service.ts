
import { SoldProperty } from "../../../generated/prisma/client";
import { BookedPropertyRepository } from "../bookedProperty/bookedProperty.repository";
import { SoldPropertyRepository } from "./soldProperty.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Service for managing sold properties, providing business logic and interacting with the repository.
 * @generated 2026-03-27
 */

export const SoldPropertyService = {

    async getAllSoldProperties() {
        return await SoldPropertyRepository.findAll();
    },

    async getSoldPropertiesByUserId(userId: string) {
        return await SoldPropertyRepository.findByUserId(userId);
    },

    async getSoldPropertyById(id: number) {
        return await SoldPropertyRepository.findById(id);
    },

    async addSoldProperty(data: SoldProperty) {

        await BookedPropertyRepository.update(data.bookedPropertyId, { isSold: true });
        return await SoldPropertyRepository.add(data);
        
    },

    async updateSoldProperty(id: number, data: Partial<SoldProperty>) {
        return await SoldPropertyRepository.update(id, data);
    },

    async deleteSoldProperty(id: number) {
        return await SoldPropertyRepository.delete(id);
    }
};