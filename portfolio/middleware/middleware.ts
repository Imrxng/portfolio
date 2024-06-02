import { Request, Response, NextFunction } from "express";

export async function requireLogin(req: Request, res: Response, next: NextFunction) {
    if (req.session.username) {
        next();
    } else {
        res.redirect("back");
    };
};