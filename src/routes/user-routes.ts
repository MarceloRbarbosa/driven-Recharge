import { validateSchema } from "../middlewares/validate-schema-middleware";
import userControllers from "../controllers/users-controllers";
import { Router } from "express";
import userSchema from "../schemas/user-schema";


const userRouter = Router ();

userRouter.post("/users",validateSchema(userSchema),userControllers.createNewUser)
userRouter.get("/users", userControllers.getAllUser)
userRouter.get("/users/:document", userControllers.getUserByDoc)

export default userRouter;