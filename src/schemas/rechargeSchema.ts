import joi, { number } from "joi";
import { CreaterRecharge } from "protocols/protocolTypes";

const rechargeSchema = joi.object<CreaterRecharge>({
    phone_id: joi.number().required(),
    amount:  joi.number().min(10.00).max(100.00).required(),
    created_at: joi.date().required()
})

export default rechargeSchema;