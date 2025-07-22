import { Request, Response } from "express";
import { CreatePhone } from "protocols/protocolTypes";

async function insertNewPhone(req:Request, res: Response) {
    const phoneData = req.body as CreatePhone;
    res.sendStatus(201)
}


const phoneControllers = {
    insertNewPhone,
}

export default phoneControllers;