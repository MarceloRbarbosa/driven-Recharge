import joi from "joi";
import { CreatePhone, CreatePhoneWithUser } from "protocols/protocolTypes";

const phoneSchema = joi.object<CreatePhoneWithUser>({
    phone_number: joi.string().length(11).pattern(/^\d+$/).required(),
    carrier_id: joi.number().integer().required(),
    name: joi.string().required(),
    description: joi.string().required()
});

export default phoneSchema;