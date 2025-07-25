import { SummaryPhone, User, Recharge } from "protocols/protocolTypes";
import connection from "../config/database";

async function findUserByDocument(document:string) {
    const userResult = await connection.query<User>(
        `SELECT * FROM users WHERE document = $1
        `,[document]);
    const user = userResult.rows[0] || null
   
    const phoneResult = await connection.query<SummaryPhone>(`
            SELECT 
            p.id, p.phone_number as phone_number, p.user_id as user_id, p.description as description,
            c.id as carrier_id, c.name as carrier_name, c.code as carrier_code,
            r.id as recharge_id, r.amount as amount, r.created_at as date
            FROM phones as p
            JOIN carriers as c ON p.carrier_id = c.id
            JOIN recharge as r ON r.phone_id = p.id
            WHERE p.user_id = $1
        `,[user.id])
        
    return { document: user.document, phones: phoneResult.rows }
}

const summaryRepository = {
    findUserByDocument
}

export default summaryRepository;