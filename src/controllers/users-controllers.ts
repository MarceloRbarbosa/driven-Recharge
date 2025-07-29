import { CreateUser } from "protocols/protocolTypes";
import userServices from "../services/users-service";
import { Request, Response } from "express";
import  httpStatus  from "http-status";

async function createNewUser(req:Request, res: Response) {
    const user = req.body as CreateUser;
    await userServices.createNewUserService(user)
    res.status(httpStatus.CREATED).send("Usuario cadastrado com sucesso")
}

const userControllers = {
    createNewUser
}

export default userControllers;