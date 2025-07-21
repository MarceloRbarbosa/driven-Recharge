import joi from "joi";
import { PhonesData } from "protocols/protocolTypes";

const phoneSchema = joi.object<PhonesData>({
    phone_number: joi.string().length(11).pattern(/^\d+$/).required(),
    carrier_id: joi.number().integer().required(),
    user_id: joi.number().integer().required(),
    description: joi.string().required()
});

export default phoneSchema;