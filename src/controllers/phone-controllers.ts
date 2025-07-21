import { Request, Response } from "express";
import { PhonesData } from "protocols/protocolTypes";

async function insertNewPhone(req:Request, res: Response) {
    const phoneData = req.body as PhonesData;
    res.sendStatus(201)
}


const phoneControllers = {
    insertNewPhone,
}

export default phoneControllers;