import phoneControllers from "../controllers/phone-controllers"
import { Router } from "express";
import { validateSchema } from "../middlewares/validate-schema-middleware";
import phoneSchema from "../schemas/phoneSchema";

const phoneRouter = Router ();

phoneRouter.post("/phones", validateSchema(phoneSchema),phoneControllers.insertNewPhone);
phoneRouter.get("/phones", phoneControllers.getAllPhones)
phoneRouter.get("/phones/:document", phoneControllers.getPhonesByDocument);


export default phoneRouter;