import connection from "config/database";
import { NewPhoneData, PhonesData } from "protocols/protocolTypes";


async function insertNewPhone(phoneData:PhonesData) {
    const {phone_number, carrier_id, user_id, description} = phoneData;
    const result = await connection.query<NewPhoneData>(`
        INSERT INTO phones (phone_number, carrier_id, user_id, description)
        VALUES ($1, $2, $3,$4)
        RETURNING *
        `,[phone_number, carrier_id, user_id, description])

    return result.rows[0];
    

    
}


const phoneRepositoy = {
    insertNewPhone
}

export default phoneRepositoy;