
import { SoldProperty } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import { BookedPropertyRepository } from "../bookedProperty/bookedProperty.repository";
import { PropertyRepository } from "../property/property.repository";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Service for managing sold properties, providing business logic and interacting with the repository.
 * @generated 2026-03-27
 */

export const SoldPropertyRepository = {

    async findAll() {

        const soldProperties = await prisma.soldProperty.findMany({
            include: {
                property: true,
                agent: true,
                 user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        });
        return soldProperties;
    },

    async findByUserId(userId: string) {
        const soldProperties = await prisma.soldProperty.findMany({
            where: { userId },
            include: {
                property: true,
                agent: true,
                 user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        });
        return soldProperties;
    },

    async findById(id: number) {
        const soldProperty = await prisma.soldProperty.findUnique({
            where: { id },
            include: {
                property: true,
                agent: true,
                 user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        });
        return soldProperty;
    },

    async add(data: SoldProperty) {

        const soldProperty = await prisma.soldProperty.create({
            data
        });

        if(soldProperty) {
            await BookedPropertyRepository.update(soldProperty.bookedPropertyId, {isSold: true});
            await PropertyRepository.update(soldProperty.propertyId, {isBought: true});
        }
        else {
            throw new Error("Failed to generate sold property");
        }
        
        return soldProperty;
    },

    async update(id: number, data: Partial<SoldProperty>) {
        const soldProperty = await prisma.soldProperty.update({
            where: { id },
            data
        });
        return soldProperty;
    },

    async delete(id: number) {
        const soldProperty = await prisma.soldProperty.delete({
            where: { id }
        });
        return soldProperty;
    }
};