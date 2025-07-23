import connection from "../config/database";
import { Phone, CreatePhone, PhoneByDoc } from "../protocols/protocolTypes";


async function insertNewPhone(phoneData:CreatePhone) {
    const {phone_number, carrier_id, user_id, description} = phoneData;
    const result = await connection.query<Phone>(`
        INSERT INTO phones (phone_number, carrier_id, user_id, description)
        VALUES ($1, $2, $3,$4)
        RETURNING *
        `,[phone_number, carrier_id, user_id, description])

    return result.rows[0];
}

async function findAllPhones() {
    const phones = await connection.query<Phone>(`SELECT * FROM phones`)
    return phones.rows;
}

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
        SELECT users.id, users.document as document, phones.phone_number as phone_number
        FROM users
        JOIN phones ON phones.user_id = users.id
        WHERE document = $1
        `,[doc])
        return phone.rows;
}

async function deletePhoneNumber(id:number) {
    await connection.query<Phone>(`DELETE FROM phones WHERE id =$1`,[id])
}

const phoneRepository = {
    insertNewPhone,
    findAllPhones,
    findPhonesById,
    findPhoneByNumber,
    findPhoneByDoc,
    deletePhoneNumber
}

export default phoneRepository;