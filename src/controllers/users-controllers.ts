import { CreateUser, User } from "protocols/protocolTypes";
import userServices from "../services/users-service";
import { Request, Response } from "express";
import  httpStatus  from "http-status";

async function createNewUser(req:Request, res: Response) {
    const user = req.body as CreateUser;
    await userServices.createNewUserService(user)
    res.status(httpStatus.CREATED).send("Usuario cadastrado com sucesso")
}

async function getAllUser(req: Request, res: Response) {
   const users = await userServices.getUsersService()
    res.send(users)
}

async function getUserByDoc(req: Request, res: Response) {
    const {document} = req.params
    const userSelected = await userServices.getUserByDocService(document)
    res.send(userSelected)
}

const userControllers = {
    createNewUser,
    getAllUser,
    getUserByDoc
}

export default userControllers;