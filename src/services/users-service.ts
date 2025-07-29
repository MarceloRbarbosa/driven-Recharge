import userRepository from "../repositories/users-repository";
import { CreateUser } from "protocols/protocolTypes";

async function createNewUserService(newUser:CreateUser) {
    const conflict = await userRepository.findUserByName(newUser.name)
    if(conflict){
        throw { 
            type: "conflict", 
            message: "Já existe um usuário com esse nome"}
    }

    const cpfConflict = await userRepository.findUserByDocument(newUser.document)
    if(cpfConflict){
        throw { 
            type: "conflict", 
            message: "Este documento já está sendo utilizado"}
    }

    await userRepository.createNewUser(newUser)
}

const userServices = {
    createNewUserService
}

export default userServices;