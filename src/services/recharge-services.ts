import phoneRepository from "../repositories/phones-repository";
import { CreaterRecharge } from "../protocols/protocolTypes";
import rechargeRepository from "../repositories/recharges-repository";


async function createRechargeService(rechargeData:CreaterRecharge) {
    const phone = await phoneRepository.findPhonesById(rechargeData.phone_id)
    
    if(!phone){
        throw { type: "NOT_FOUND", message: "Telefone não cadastrado"}
    };
    
    await rechargeRepository.CreaterNewRecharge(rechargeData);
}  

async function getRechargeByPhone(phone_number:string) {
    const phone = await phoneRepository.findPhoneByNumber(phone_number)
    if(!phone){
        throw { type: "NOT_FOUND", message: "Telefone não cadastrado"}
    }
    
    const recharge = await rechargeRepository.findRechargeByPhone(phone_number);
    return recharge
}

const rechargeService = {
    createRechargeService,
    getRechargeByPhone
}

export default rechargeService;