
import { BookedProperty } from "../../../generated/prisma/client";
import { NotificationService } from "../notification/notification.service";
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

        const result =  await BookedPropertyRepository.add(data) ;
        
        await NotificationService.addNotification({
            title : 'New Property Booked',
            message : 'Check your property list',
            receiverRole : 'AGENT',
            receiverId : result.agentId
        }) ;

        return result;
    },

    async updateBookedProperty(id: number, data: Partial<BookedProperty>) {

        // here property data can updated as isPropAmountAccepted field update or proposedAmount field update or isSold field update.
        
        return await BookedPropertyRepository.update(id, data);
    },
    
    async deleteBookedProperty(id: number) {
        return await BookedPropertyRepository.delete(id);
     }  
};