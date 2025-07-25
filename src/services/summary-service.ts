import summaryRepository from "../repositories/summary-repository";

async function getUserSummaryByDoc(document:string) {
    const result = await summaryRepository.findUserByDocument(document) 
    if(!result.user){
        throw { type: "NOT_FOUND", message: "Usuário não cadastrado"}
    }

    const phoneFormatted: any[]= [];

    for( const row of result.phones) {
        let phone = phoneFormatted.find(p => p.id === row.id);

    if(!phone){
    phone ={
        id: row.id,
        user_id: row.user_id,
        phone_number: row.phone_number,
        description: row.description,
    carrier:{
        id:row.carrier_id,
        name: row.carrier_name,
        code:row.carrier_code
    },
    recharges:[]
    };
    phoneFormatted.push(phone)
    }

    phone.recharges.push({
        id:row.recharge_id,
        amount:row.amount,
        date:row.date
    });

}
return {
    document: result.user.document, phones:phoneFormatted
}
}
const summaryService = {
    getUserSummaryByDoc
}
export default summaryService;

