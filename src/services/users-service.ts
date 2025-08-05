import userRepository from "../repositories/users-repository";

async function getUsersService() {
    const users = await userRepository.findAllUsers()
    return users
}

async function getUserByDocService(document:string) {
    const user = await userRepository.findUserByDocument(document)
    if(!user){
        throw{ 
            type: "NOT_FOUND",
            message: "Este usuario não existe"
        }
    }
    return user
}

const userServices = {
    getUsersService,
    getUserByDocService
}

export default userServices;