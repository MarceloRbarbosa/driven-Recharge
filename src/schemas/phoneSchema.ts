import joi from "joi";
import { CreatePhoneWithUser} from "protocols/protocolTypes";

const phoneSchema = joi.object<CreatePhoneWithUser>({
    name: joi.string().required(),
    document: joi.string().length(11).required(),
    phone_number: joi.string().length(11).pattern(/^\d+$/).required(),
    carrier: joi.string().required(),
    description: joi.string().required()
});

export default phoneSchema;
