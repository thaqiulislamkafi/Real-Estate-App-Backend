import { Property } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Repository for managing properties in the database.
 * @generated 2026-03-13
 */

export const PropertyRepository = {

    async findAll() {

        const properties = await prisma.property.findMany({
            include: {
                agent: true
            }
        });
        return properties;
    },

    async findAllByAgentId(id: string) {

        const properties = await prisma.property.findMany({
            where: { agentId: id }
        });
        return properties;
    },

    async findById(id: number) {

        const property = await prisma.property.findUnique({
            where: { id },
            include: {
                agent: true
            }
        });
        return property;
    },

    async add(data: Property) {

        const property = await prisma.property.create({
            data
        });
        return property;
    },

    async update(id: number, data: Partial<Property>) {

        const property = await prisma.property.update({
            where: { id },
            data  
        });
        return property;
    },

    async delete(id: number) {

       const property = await prisma.property.delete({
            where: { id }
        });
        return property;
    }

};