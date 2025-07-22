import { CreatePhone, User } from "protocols/protocolTypes";
import phoneRepository from "../repositories/phones-repository";
import userRepository from "repositories/users-repository";



 async function createPhoneService(newPhone: CreatePhone, userData:User) {
   const conflict = await phoneRepository.findPhoneByNumber(newPhone.phone_number);
   if(conflict){
    throw { type: "conflict", message: "Este número de telefone já existe"}
   }
   
   const result = await userRepository.findUserByDocument(userData.document);
   if(result.phones.length > 3){
       throw { type: "conflict", message: "Este usuário já atingiu o limite maximo de números cadastrados "}
    }

    const existingUser = await userRepository.findUserById(userData.id);
    if(!existingUser) {
        throw { type: "NOT_FOUND", message: "Usuário não cadastrado"}
    }

    await phoneRepository.insertNewPhone(newPhone)
}

async function getPhoneService() {
    const phones = await phoneRepository.findAllPhones()
    return phones
}

async function getPhoneByDocumentService(documentData:string) {
    const user = await userRepository.findUserByDocument(documentData)

    if(!user){
        throw { type: "NOT_FOUND", message: "Usuário não cadastrado"}
    }
    return user;
}

async function deletePhoneService(id:number) {
   const phone = await phoneRepository.findPhonesById(id)

    if(!phone) {
        throw { type: "not_found", message: "Este telefone não existe"}
    }

    await phoneRepository.deletePhoneNumber(id);
}


const phonesService = {
    createPhoneService,
    getPhoneService,
    getPhoneByDocumentService,
    deletePhoneService
}

export default phonesService;