import joi from "joi";
import { CreateUser } from "../protocols/protocolTypes";

const userSchema = joi.object<CreateUser>({
    document: joi.string().required(),
    name:joi.string().required(),
})

export default userSchema;