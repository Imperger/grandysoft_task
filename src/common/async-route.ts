import { NextFunction, Request, Response } from "express";

export function AsyncRoute(fn: (req: Request, res: Response, next: NextFunction) => unknown) {
    return (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res, next)).catch(next);
}
