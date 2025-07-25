import connection from "../config/database";


async function findAllcarriers() {
    const carriers = await connection.query(`SELECT * FROM carriers`)
    return carriers.rows;
}

const carrierService = {
    findAllcarriers
}

export default carrierService;