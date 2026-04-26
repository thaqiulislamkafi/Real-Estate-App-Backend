
import { Router } from "express";
import { AgentController } from "./agent.controller";
import { validate } from "../../middleware/validate";
import { makeFraudSchema, makeVerifiedSchema } from "./agent.schema";

/** 
 * @author Thaqi Ul Islam Kafi
 * @description Router for managing agent-related routes, connecting HTTP endpoints to controller methods.
 * @generated 2026-03-26
 */

export const AgentRouter = Router();

AgentRouter.get('/',AgentController.getAllAgents);
AgentRouter.get('/:id',AgentController.getAgentById);
AgentRouter.put('/update-agent/:id',AgentController.updateAgent);
AgentRouter.put('/verify-agent/:id',validate(makeVerifiedSchema),AgentController.makeVerfied);
AgentRouter.put('/fraud-agent/:id',validate(makeFraudSchema),AgentController.makeFraud);
AgentRouter.delete('/:id',AgentController.deleteAgent);