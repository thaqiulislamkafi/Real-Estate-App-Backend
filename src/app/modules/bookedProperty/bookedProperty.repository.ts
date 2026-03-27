
import { BookedProperty } from "../../../generated/prisma/browser";
import { prisma } from "../../../lib/prisma"

/**
 * @author Thaqi Ul Islam Kafi
 * @description Repository for managing booked properties in the database.
 * @generated 2026-03-26
 */

export const BookedPropertyRepository = {

    async findAll() {
        const bookedProperties = await prisma.bookedProperty.findMany({
            include: {
                property: true,
                user: true
            }
        });
        return bookedProperties;
    },

    async findByUserId(userId: string) {
        const bookedProperties = await prisma.bookedProperty.findMany({
            where: { userId },
            include: {
                property: true,
                user: true
            }
        });
        return bookedProperties;
    },


    async findById(id: number) {
        const bookedProperty = await prisma.bookedProperty.findUnique({
            where: { id },
            include: {
                property: true,
                user: true
            }
        });
        return bookedProperty;
    },

    async add(data: BookedProperty) {
        const bookedProperty = await prisma.bookedProperty.create({
            data,
            include: {
                property: true,
                user: true
            }
        });
        return bookedProperty;
    },

    async update(id: number, data: Partial<BookedProperty>) {

        // here property data can updated as isPropAmountAccepted field update or proposedAmount field update or isSold field update

        const bookedProperty = await prisma.bookedProperty.update({
            where: { id },
            data,
            include: {
                property: true,
                user: true
            }
        });
        return bookedProperty;
    },

    async delete(id: number) {
        const bookedProperty = await prisma.bookedProperty.delete({
            where: { id },
            include: {
                property: true,
                user: true
            }
        });
        return bookedProperty;
    }
};