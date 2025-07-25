import summaryControllers from "../controllers/summary-controllers";
import { Router } from "express"

const summaryRouter = Router();

summaryRouter.get("/summary/:document", summaryControllers.findUserSummaryByDoc)

export default summaryRouter;