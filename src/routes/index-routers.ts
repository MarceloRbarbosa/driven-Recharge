import { Router } from "express";
import healthRouter from "./health-routes";
import phoneRouter from "./phones-routes";
import rechargeRouter from "./recharge-routers";

const routers = Router();

routers.use(phoneRouter)
routers.use(rechargeRouter)
routers.use(healthRouter)

export default routers;