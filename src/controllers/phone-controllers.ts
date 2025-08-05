import  httpStatus  from "http-status";
import { Request, Response } from "express";
import { CreatePhoneWithUser } from "../protocols/protocolTypes";
import phonesService from "../services/phones-services";

async function insertNewPhone(req:Request, res: Response) {
    const newPhone = req.body as CreatePhoneWithUser;
    await phonesService.createPhoneService(newPhone)
    res.status(httpStatus.CREATED).send("Telefone adicionado com sucesso")
}

async function getPhonesByDocument(req:Request, res: Response) {
    const { document }= req.params
    const phones = await phonesService.getPhoneByDocumentService(document)
    res.send(phones)
}

const phoneControllers = {
    insertNewPhone,
    getPhonesByDocument
}

export default phoneControllers;
