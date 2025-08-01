import connection from "../config/database";
import { Phone, CreatePhone, PhoneByDoc, CreatePhoneWithUser } from "../protocols/protocolTypes";

async function insertNewPhone(phoneData:CreatePhone) {
    const {phone_number, carrier_id, user_id, description} = phoneData;
    const result = await connection.query<Phone>(`
        INSERT INTO phones (phone_number, carrier_id, user_id, description)
        VALUES ($1, $2, $3,$4)
        RETURNING *
        `,[phone_number, carrier_id, user_id, description])
    return result.rows[0];
}

// async function findAllPhones() {
//     const phones = await connection.query<Phone>(`SELECT * FROM phones`)
//     return phones.rows;
// }

async function findPhonesById(id:Number) {
    const phone = await connection.query<Phone>(`
        SELECT * FROM phones WHERE id = $1
        `,[id]);
    return phone.rows[0]
}

async function findPhoneByNumber(phone_number:string) {
    const phone = await connection.query<Phone>(`
        SELECT * FROM phones WHERE phone_number = $1
        `, [phone_number]);
    return phone.rows[0]
}

async function findPhoneByDoc(doc:string) {
    const phone = await connection.query<PhoneByDoc>(`
        SELECT phones.phone_number as phone_number
        FROM users
        JOIN phones ON phones.user_id = users.id
        WHERE document = $1
        `,[doc])
    return phone.rows;
}

// async function updatePhone(phoneData:Phone) {
//     const {phone_number, carrier_id, user_id, description, id} = phoneData
//     const result = await connection.query<Phone>(`
//         UPDATE phones 
//         SET phone_number = $1, carrier_id = $2, user_id = $3, description = $4
//         WHERE id = $5
//         RETURNING *
//         `,[phone_number, carrier_id, user_id, description, id])
//         return result.rows[0]; 
// }

// async function deletePhoneNumber(id:number) {
//     await connection.query<Phone>(`DELETE FROM phones WHERE id =$1`,[id])
// }

const phoneRepository = {
    insertNewPhone,
    // findAllPhones,
    findPhonesById,
    findPhoneByNumber,
    findPhoneByDoc,
    // updatePhone,
    // deletePhoneNumber
}

export default phoneRepository;