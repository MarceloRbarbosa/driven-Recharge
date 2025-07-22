import joi from "joi";
import { CreatePhone } from "protocols/protocolTypes";

const phoneSchema = joi.object<CreatePhone>({
    phone_number: joi.string().length(11).pattern(/^\d+$/).required(),
    carrier_id: joi.number().integer().required(),
    user_id: joi.number().integer().required(),
    description: joi.string().required()
});

export default phoneSchema;