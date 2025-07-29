import  httpStatus  from "http-status";
import { Request, Response } from "express";
import {  Carrier, CreateCarrier } from "../protocols/protocolTypes";
import carriersServices from "../services/carriers-services";

async function insertNewCarrier(req:Request, res: Response) {
    const newCarrier = req.body as CreateCarrier;
    await carriersServices.createCarrierService(newCarrier)
    res.status(httpStatus.CREATED).send("Operadora criada com sucesso")
}

async function getCarriers(req:Request, res:Response) {
    const carriers = await carriersServices.getAllCarriersService();
    res.send(carriers)
}

async function getCarrierById(req:Request, res: Response) {
    const { id } = req.params
    const carrierId = parseInt(id, 10)
    const carrier = await carriersServices.getCarriersById(carrierId);
    res.send(carrier)
}

async function updateCarrier(req:Request, res: Response) {
    const carrierUpdated = req.body as Carrier
    const carrierId = parseInt(req.params.id, 10)
    carrierUpdated.id = carrierId;

    await carriersServices.updateCarrierService(carrierUpdated)
    res.status(httpStatus.OK).send({message:"Operadora atualizada", carrier: carrierUpdated})
}

async function deleteCarrier(req:Request, res: Response) {
    const { id } = req.params
    const carrierId = parseInt(id, 10)

    await carriersServices.deleteCarrierService(carrierId)
    res.send("Operadora deletada")
}

const carriersControllers = {
    insertNewCarrier,
    getCarriers,
    getCarrierById,
    updateCarrier,
    deleteCarrier
}

export default carriersControllers