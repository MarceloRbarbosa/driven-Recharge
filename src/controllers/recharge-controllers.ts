import { Request, Response } from "express";
import { CreaterRecharge } from "protocols/protocolTypes";
import rechargeService from "../services/recharge-services";
import  httpStatus  from "http-status";


async function insertNewRecharge(req:Request, res:Response) {
    const newRecharge = req.body as CreaterRecharge;
    await rechargeService.createRechargeService(newRecharge)
    res.status(httpStatus.CREATED).send("Recarga feita com sucesso")
}

async function findRechargeByNumber(req:Request, res:Response) {
    const  phone_number  = req.params.number
    const recharges = await rechargeService.getRechargeByPhone(phone_number)
    res.send(recharges)  
}

const rechargeControllers = {
    insertNewRecharge,
    findRechargeByNumber
}

export default rechargeControllers;