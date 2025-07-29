import carriersRepository from "../repositories/carriers-repository";
import { Carrier, CreateCarrier } from "../protocols/protocolTypes";



async function createCarrierService(carrierData:CreateCarrier) {
    const conflict = await carriersRepository.findCarrierByName(carrierData.name)
    if(conflict){
        throw { 
            type: "conflict",
            message: "Esta operadora já existe"
        }
    }

    const conflictByCode = await carriersRepository.findCarrierByCode(carrierData.code)
    if(conflictByCode){
        throw {
            type: "conflict",
            message: "Este codigo de  operadora já está sendo utilizado"
        }
    }

     await carriersRepository.createNewCarrier(carrierData)
}

async function getAllCarriersService() {
   const carriers = await carriersRepository.findAllcarriers()
   return carriers
}

async function getCarriersById(id:number) {
    const carrier = await carriersRepository.findCarrierById(id)
    if(!carrier){ 
        throw {
            type: "NOT_FOUND",
            message: "Esta operadora não existe"
        }
    }
    return carrier
}

async function updateCarrierService(carrierData:Carrier) {
    const carrier = await carriersRepository.findCarrierById(carrierData.id)
    if(!carrier){ 
        throw {
            type: "NOT_FOUND",
            message: "Esta operadora não existe"
        }
}
    await carriersRepository.updateCarrier(carrierData)
}

async function deleteCarrierService(id:number) {
    const carrier = await carriersRepository.findCarrierById(id)
     if (!carrier) {
        throw {
            type: "NOT_FOUND",
            message: "Esta operadora não existe"
        };
    }
    await carriersRepository.deleteCarrier(id)
}

const carriersServices = {
    createCarrierService,
    getAllCarriersService,
    updateCarrierService,
    deleteCarrierService,
    getCarriersById
}

export default carriersServices;