import { Carrier, CreateCarrier } from "../protocols/protocolTypes";
import connection from "../config/database";


async function findAllcarriers() {
    const carriers = await connection.query<Carrier>(`SELECT * FROM carriers`)
    return carriers.rows;
}

async function findCarrierById(id:number) {
    const carrier = await connection.query<Carrier>(`
        SELECT * FROM carriers WHERE id = $1
        `,[id])

        return carrier.rows[0]
}

async function findCarrierByName(name:string) {
    const carrier = await connection.query<Carrier>(`
        SELECT * FROM carriers WHERE name = $1`
        ,[name])    
        return carrier.rows[0]
}

async function findCarrierByCode(code:number) {
    const carrier = await connection.query<Carrier>(`
        SELECT * FROM carriers WHERE code = $1`
        ,[code])
        return carrier.rows[0]
}

async function createNewCarrier(carrierData:CreateCarrier) {
    const { name, code } = carrierData
    const result = await connection.query<Carrier>(`
        INSERT INTO carriers (name, code)
        VALUES ($1, $2)
        RETURNING *
        `,[name, code])
        return result.rows[0];
}

async function updateCarrier(carrierData:Carrier) {
    const { id, name, code} = carrierData;
    await connection.query(`
        UPDATE carriers 
        SET  name = $1, code = $2
        WHERE id = $3
        `, [name, code, id])
}

async function deleteCarrier(id:number) {
    await connection.query<Carrier>(`
        DELETE FROM carriers WHERE id = $1
        `,[id])
}

const carriersRepository = {
    findAllcarriers,
    findCarrierById,
    findCarrierByName,
    findCarrierByCode,
    createNewCarrier,
    updateCarrier,
    deleteCarrier
}

export default carriersRepository;