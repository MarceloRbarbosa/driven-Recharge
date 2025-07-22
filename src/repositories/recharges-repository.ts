import connection from "config/database";
import { CreaterRecharge, Recharge } from "protocols/protocolTypes";

async function CreaterNewRecharge(rechargeData:CreaterRecharge) {
    const {phone_id, amount, created_at} = rechargeData;
    const result = await connection.query<CreaterRecharge>(`
        INSERT INTO recharge (phone_id, amount, created_at)
        VALUES ($1, $2, $3)
        RETURNING *
        `,[phone_id, amount, created_at])
        return result.rows[0]
}

async function findAllRecharge() {
    const recharges = await connection.query<Recharge>(`SELECT * FROM recharges`)
    return recharges.rows
}

async function findRechargeById(id:number) {
    const recharge = await connection.query<Recharge>(`
        SELECT * FROM recharge WHERE id= $1
        `,[id])
        return recharge.rows[0]
}

async function findRechargeByPhone(phone_number: Number) {
    const recharge = await connection.query<Recharge>(`
        SELECT * FROM recharge WHERE phone_number = $1
        `,[phone_number])
        return recharge.rows[0]
}

const rechargeRepository = {
    CreaterNewRecharge,
    findAllRecharge,
    findRechargeById,
    findRechargeByPhone
}

export default rechargeRepository;