import { Router } from "express";
import { validateSchema } from "../middlewares/validate-schema-middleware";
import carrierSchema from "../schemas/carriers-schema";
import carriersControllers from "../controllers/carriers-controllers";


const carriersRouter = Router()

carriersRouter.post("/carriers",validateSchema(carrierSchema), carriersControllers.insertNewCarrier)
carriersRouter.get("/carriers", carriersControllers.getCarriers)
carriersRouter.get("/carriers/:id", carriersControllers.getCarrierById)
carriersRouter.put("/carriers/:id", carriersControllers.updateCarrier)
carriersRouter.delete("/carriers/:id", carriersControllers.deleteCarrier)

export default carriersRouter;