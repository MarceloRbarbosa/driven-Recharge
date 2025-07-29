import joi from "joi";
import { CreateCarrier } from "../protocols/protocolTypes";

const carrierSchema = joi.object<CreateCarrier>({
name: joi.string().required(),
code: joi.number().required()
})

export default carrierSchema;