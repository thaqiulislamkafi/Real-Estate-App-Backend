
import { Agent } from "../../../generated/prisma/browser";
import { prisma } from "../../../lib/prisma";

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Repository for managing agents in the database.
 * @generated 2026-03-13
 */

export const AgentRepository = {

    async findAll() {
        const agents = await prisma.agent.findMany({
            include: {
                user: true,
            }
        });
        return agents;
    },

    async findById(id: string) {
        const agent = await prisma.agent.findUnique({
            where: { id },
            include: {
                user: true,
            }
        });
        return agent;
    },
       
    async add(userId: string) {
        const agent = await prisma.agent.create({
            data: {
                userId
            }
        });
        return agent;
    },

    async update(id: string, data: Partial<Agent>) {

        const agent = await prisma.agent.update({
            where: { id },
            data
        });
        return agent;
    },

    async makeVerified(id: string,data: { isVerified: boolean }) {

        const agent = await prisma.agent.update({
            where: { id },
            data
        })

        return agent ;
    },

    async manageFraud(id: string,data: { isFraud: boolean }) {

        const agent = await prisma.agent.update({
            where: { id },
            data
        });
        
        return agent;

    },

    async delete(id: string) {
        
        const agent = await prisma.agent.delete({
            where: { id }
        });

        if(!agent){
            throw new Error("Failed to delete agent");
        }
        else {
            await prisma.user.delete({
                where: {
                    id: agent.userId
                }
            });
        }

        return agent;
    }

};