
import { Agent } from "../../../generated/prisma/client";
import { AgentRepository } from "./agent.repository";

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Service for managing agents, providing business logic and interaction with the repository.
 * @generated 2026-03-13
 */

export const AgentService = {

    async getAllAgents() {
        return await AgentRepository.findAll();
    },

    async getAgentById(id: string) {
        return await AgentRepository.findById(id);
    },

     async updateAgent(id: string, data: Partial<Agent>) {
        return await AgentRepository.update(id, data);
    },

    async makeVerified(id:string,data:{isVerified:boolean}){
        return await AgentRepository.makeVerified(id,data);
    },

    async makeFraud(id:string,data:{isFraud:boolean}){
        return await AgentRepository.makeFraud(id,data);
    },

    async deleteAgent(id: string) {
        return await AgentRepository.delete(id);
    }

}