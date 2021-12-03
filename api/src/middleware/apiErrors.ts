import { apiErrors } from "../errors/apiErrors";
import { Request, Response } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: any) {
  if (err instanceof apiErrors) {
    res.status(err.code).json(err.message);
    return;
  }
  res.status(500).send("Something broke!");
}
