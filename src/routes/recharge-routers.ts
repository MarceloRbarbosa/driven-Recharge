import { Router } from "express"
import { validateSchema } from "../middlewares/validate-schema-middleware";
import rechargeSchema from "../schemas/rechargeSchema";
import rechargeControllers from "../controllers/recharge-controllers";

const rechargeRouter = Router();

rechargeRouter.post("/recharges", validateSchema(rechargeSchema),rechargeControllers.insertNewRecharge)
export default rechargeRouter;