import { CreatePhoneWithUser } from "../protocols/protocolTypes";
import phoneRepository from "../repositories/phones-repository";
import userRepository from "../repositories/users-repository";
import carriersRepository from "../repositories/carriers-repository";

async function createPhoneService(newPhone:CreatePhoneWithUser) {
    const user = await userRepository.findUserByName(newPhone.name);
    if(!user){ 
        throw {
            type: "NOT_FOUND", 
            message: "Usuário não encontrado"  
        } 
    };

    if(user.phones?.length >= 3){
     throw { 
         type: "conflict", 
         message: "Este usuário já atingiu o limite maximo de números cadastrados "}
    };

    const conflict = await phoneRepository.findPhoneByNumber(newPhone.phone_number);
     if(conflict){ 
        throw { 
            type: "conflict", 
            message: "Este número de telefone já existe"}
    }

     const carriers = await carriersRepository.findAllcarriers()
     const carrier = carriers.find(c => c.id === newPhone.carrier_id)
     if (!carrier) {
        throw { 
            type: "conflict", 
            message: "Operadora não encontrada" };
    }

    const phoneDDD = newPhone.phone_number.slice(0, 2);
  if (phoneDDD !== String(carrier.code)) {
    throw {
      type: "conflict",
      message: `O DDD do número (${phoneDDD}) não corresponde ao da operadora ${carrier.name} (DDD ${carrier.code}).`,
    };
  }

    
   newPhone.user_id = user.id;
   await phoneRepository.insertNewPhone(newPhone)
}

async function getPhoneService() {
    const phones = await phoneRepository.findAllPhones()
    return phones
}

async function getPhoneByDocumentService(documentData:string) {

    const user = await userRepository.findUserByDocument(documentData)
    if(!user){
        throw { 
            type: "NOT_FOUND", 
            message: "Usuário não cadastrado"}
    }
    const phoneResult = await phoneRepository.findPhoneByDoc(documentData);
     return phoneResult
}

async function deletePhoneService(id:number) {
   const phone = await phoneRepository.findPhonesById(id)
    if(!phone) {
        throw { 
            type: "not_found", 
            message: "Este telefone não existe"}
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