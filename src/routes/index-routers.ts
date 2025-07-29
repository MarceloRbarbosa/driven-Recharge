import { Router } from "express";
import healthRouter from "./health-routes";
import phoneRouter from "./phones-routes";
import rechargeRouter from "./recharge-routers";
import summaryRouter from "./summary-routes";
import userRouter from "./user-routes";
import carriersRouter from "./carriers-routes";

const routers = Router();

routers.use(phoneRouter)
routers.use(rechargeRouter)
routers.use(summaryRouter)
routers.use(userRouter)
routers.use(carriersRouter)
routers.use(healthRouter)

export default routers;