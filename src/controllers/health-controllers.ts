import { Request, Response } from "express";
import HttpStatus from "http-status";

export function healthCheck(req: Request, res: Response){
    res.sendStatus(HttpStatus.OK)
}


