import summaryRepository from "../repositories/summary-repository";

async function getUserSummaryByDoc(document:string) {
    const result = await summaryRepository.findUserByDocument(document)
    if(!result){
        throw { type: "NOT_FOUND", message: "Usuário não cadastrado"}
    }



}

const summaryService = {
    getUserSummaryByDoc
}

export default summaryService;

