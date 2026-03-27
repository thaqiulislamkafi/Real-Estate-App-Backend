
import { SoldProperty } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

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
                user: true
            }
        });
        return soldProperties;
    },

    async findByUserId(userId: string) {
        const soldProperties = await prisma.soldProperty.findMany({
            where: { userId },
            include: {
                property: true,
                user: true
            }
        });
        return soldProperties;
    },

    async findById(id: number) {
        const soldProperty = await prisma.soldProperty.findUnique({
            where: { id },
            include: {
                property: true,
                user: true
            }
        });
        return soldProperty;
    },

    async add(data: SoldProperty) {
        const soldProperty = await prisma.soldProperty.create({
            data,
            include: {
                property: true,
                user: true
            }
        });
        return soldProperty;
    },

    async update(id: number, data: Partial<SoldProperty>) {
        const soldProperty = await prisma.soldProperty.update({
            where: { id },
            data,
            include: {
                property: true,
                user: true
            }
        });
        return soldProperty;
    },

    async delete(id: number) {
        const soldProperty = await prisma.soldProperty.delete({
            where: { id },
            include: {
                property: true,
                user: true
            }
        });
        return soldProperty;
    }
};