import { Request, Response } from "express";
import summaryService from "../services/summary-service";

async function findUserSummaryByDoc(req:Request, res: Response) {
    const userData = req.params.document
    const user = await summaryService.getUserSummaryByDoc(userData)
    res.send(user)
}

const summaryControllers = {
    findUserSummaryByDoc
}

export default summaryControllers;