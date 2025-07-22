import { CreatePhone } from "protocols/protocolTypes";
import phoneRepository from "../repositories/phones-repository";



 async function createPhoneService(newPhone: CreatePhone) {
   const conflict = await phoneRepository.findPhoneByNumber(newPhone.phone_number);
   if(conflict){
    throw { type: "conflict", message: "Este número de telefone já existe"}
   }
   await phoneRepository.insertNewPhone(newPhone)

}

async function getPhoneService() {
    const phones = await phoneRepository.findAllPhones()
    return phones
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
    deletePhoneService
}

export default phonesService;