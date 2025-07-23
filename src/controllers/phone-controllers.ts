import  httpStatus  from "http-status";
import { Request, Response } from "express";
import { CreatePhone } from "../protocols/protocolTypes";
import phonesService from "../services/phones-services";
import userRepository from "../repositories/users-repository";

async function insertNewPhone(req:Request, res: Response) {
    const newPhone = req.body as CreatePhone;
    const userData = await userRepository.findUserById(newPhone.user_id)
    await phonesService.createPhoneService(newPhone, userData)
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
