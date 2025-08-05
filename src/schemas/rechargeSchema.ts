import joi from "joi";
import { CreaterRecharge } from "protocols/protocolTypes";

const rechargeSchema = joi.object<CreaterRecharge>({
    phone_id: joi.number().required(),
    amount:  joi.number().min(10.00).max(1000.00).required(),
})

export default rechargeSchema;