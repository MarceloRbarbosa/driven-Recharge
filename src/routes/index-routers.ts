import { Router } from "express";
import healthRouter from "./health-routes";
import phoneRouter from "./phones-routes";

const routers = Router();

routers.use(healthRouter)
routers.use(phoneRouter)

export default routers;