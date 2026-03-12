import { Request, Response } from "express";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Middleware to handle 404 Not Found errors
 * @generated 2026-03-11
 */

export const notFound = (req:Request, res:Response) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
}