import connection from "config/database";
import { Phone, CreatePhone } from "protocols/protocolTypes";


async function insertNewPhone(phoneData:CreatePhone) {
    const {phone_number, carrier_id, user_id, description} = phoneData;
    const result = await connection.query<Phone>(`
        INSERT INTO phones (phone_number, carrier_id, user_id, description)
        VALUES ($1, $2, $3,$4)
        RETURNING *
        `,[phone_number, carrier_id, user_id, description])

    return result.rows[0];
}


const phoneRepository = {
    insertNewPhone
}

export default phoneRepository;