import { CreatePhoneWithUser, Phone } from "../protocols/protocolTypes";
import phoneRepository from "../repositories/phones-repository";
import userRepository from "../repositories/users-repository";
import carriersRepository from "../repositories/carriers-repository";

async function createPhoneService(newPhone:CreatePhoneWithUser) {
    let user = await userRepository.findUserByDocument(newPhone.document);
    if(!user){      
        await userRepository.createNewUser({
            name: newPhone.name,
            document: newPhone.document
        });
        user = await userRepository.findUserByDocument(newPhone.document)
    };
    if (user.name !== newPhone.name) {
        throw {
             type: "conflict",
            message: "Nome não corresponde ao documento já cadastrado"
          };
        }
    if(user.phones?.length >= 3){
        throw { 
            type: "conflict", 
            message: "Este usuário já atingiu o limite maximo de números cadastrados "}
        };
    const conflict = await phoneRepository.findPhoneByNumber(newPhone.phone_number);
    if(conflict){ 
        throw { 
            type: "conflict", 
            message: "Este número de telefone já está sendo utilizado"}
        }
        
        const carriers = await carriersRepository.findAllcarriers()
        const carrier = carriers.find(c => c.name.toLocaleLowerCase() === newPhone.carrier.toLocaleLowerCase())
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
                newPhone.carrier_id = carrier.id
                await phoneRepository.insertNewPhone(newPhone)
            }
            
// async function getPhoneService() {
//     const phones = await phoneRepository.findAllPhones()
//     return phones
// }

async function getPhoneByDocumentService(documentData:string) {

    await userRepository.findUserByDocument(documentData)
    const phoneResult = await phoneRepository.findPhoneByDoc(documentData);
     return phoneResult
}

// async function updatePhoneService(phoneData:Phone) {
    
//      const phone = await phoneRepository.findPhonesById(phoneData.id)
//     if(!phone){ 
//         throw {
//             type: "NOT_FOUND",
//             message: "Este telefone não existe"
//         }
// }

//     await phoneRepository.updatePhone(phoneData)
// }
// async function deletePhoneService(id:number) {
//    const phone = await phoneRepository.findPhonesById(id)
//     if(!phone) {
//         throw { 
//             type: "not_found", 
//             message: "Este telefone não existe"}
//     }

//     await phoneRepository.deletePhoneNumber(id);
// }


const phonesService = {
    createPhoneService,
    // getPhoneService,
    getPhoneByDocumentService,
    // updatePhoneService,
    // deletePhoneService
}

export default phonesService;