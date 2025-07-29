import { validateSchema } from "../middlewares/validate-schema-middleware";
import userControllers from "../controllers/users-controllers";
import { Router } from "express";
import userSchema from "../schemas/user-schema";


const userRouter = Router ();

userRouter.post("/user",validateSchema(userSchema),userControllers.createNewUser)


export default userRouter;