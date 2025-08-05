import connection from "../config/database";
import { CreaterRecharge, Recharge, RechargeByNumber } from "protocols/protocolTypes";

async function CreaterNewRecharge(rechargeData:CreaterRecharge) {
    const {phone_id, amount} = rechargeData;
    const result = await connection.query<Recharge>(`
        INSERT INTO recharge (phone_id, amount)
        VALUES ($1, $2)
        RETURNING *
        `,[phone_id, amount])
    return result.rows[0]
}

async function findRechargeByPhone(phone_number: string) {
    const recharge = await connection.query<RechargeByNumber>(`
        SELECT recharge.id, phones.phone_number, recharge.amount as amount, recharge.created_at as date 
        FROM recharge
        JOIN phones ON phones.id = recharge.phone_id 
        WHERE phone_number = $1
        `,[phone_number])
    return recharge.rows
}

const rechargeRepository = {
    CreaterNewRecharge,
    findRechargeByPhone
}

export default rechargeRepository;