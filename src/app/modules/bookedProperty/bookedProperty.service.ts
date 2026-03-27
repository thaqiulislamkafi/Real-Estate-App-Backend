
import { BookedProperty } from "../../../generated/prisma/client";
import { BookedPropertyRepository } from "./bookedProperty.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Service for managing booked properties, providing business logic and interacting with the repository.
 * @generated 2026-03-26
 */

export const BookedPropertyService = {

    async getAllBookedProperties() {
        return await BookedPropertyRepository.findAll();
    },

    async getBookedPropertiesByUserId(userId: string) {
        return await BookedPropertyRepository.findByUserId(userId);
    },

    async getBookedPropertyById(id: number) {
        return await BookedPropertyRepository.findById(id);
    },

    async addBookedProperty(data: BookedProperty) {
        return await BookedPropertyRepository.add(data);
    },

    async updateBookedProperty(id: number, data: Partial<BookedProperty>) {

        // here property data can updated as isPropAmountAccepted field update or proposedAmount field update or isSold field update.
        
        return await BookedPropertyRepository.update(id, data);
    },
    
    async deleteBookedProperty(id: number) {
        return await BookedPropertyRepository.delete(id);
     }  
};