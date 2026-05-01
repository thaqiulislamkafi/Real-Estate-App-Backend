
import { Request, Response, NextFunction } from "express";
import { AgentService } from "./agent.service";

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Controller for managing agents, handling HTTP requests and responses.
 * @generated 2026-03-13
 */

export const AgentController = {

    async getAllAgents(req: Request, res: Response, next: NextFunction) {

        try {
            const agents = await AgentService.getAllAgents();
            res.status(200).send({
                success: true,
                message: "Agents retrieved successfully",
                data: agents
            });
        } catch (error) {
            next(error);
        }
    },

    async getAgentById(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const agent = await AgentService.getAgentById(String(id));
            res.status(200).send({
                success: true,
                message: "Agent retrieved successfully",
                data: agent
            });
        } catch (error) {
            next(error);
        }
    },

    async updateAgent(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const agent = await AgentService.updateAgent(String(id), req.body);
            res.status(200).send({
                success: true,
                message: "Agent updated successfully",
                data: agent
            });
        } catch (error) {
            next(error);
        }
    },

    async makeVerfied(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const agent = await AgentService.makeVerified(String(id),req.body);
            res.status(200).send({
                success: true,
                message: "Agent verified successfully",
                data: agent
            });
        } catch (error) {
            next(error);
        }
    },

    async manageFraud(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const agent = await AgentService.manageFraud(String(id),req.body);
            res.status(200).send({
                success: true,
                message: `Agent marked as ${agent.isFraud ? 'Fraud':'UnFraud'} successfully`,
                data: agent
            });
        } catch (error) {
            next(error);
        }
    },


    async deleteAgent(req: Request, res: Response, next: NextFunction) {

        try {
            const id = req.params.id;
            const agent = await AgentService.deleteAgent(String(id));
            res.status(200).send({
                success: true,
                message: "Agent deleted successfully",
                data: agent
            });
        } catch (error) {
            next(error);
        }
    }

}