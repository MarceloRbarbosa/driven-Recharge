import { Carrier } from "protocols/protocolTypes";
import connection from "../config/database";


async function findAllcarriers() {
    const carriers = await connection.query<Carrier>(`SELECT * FROM carriers`)
    return carriers.rows;
}

const carriersRepository = {
    findAllcarriers
}

export default carriersRepository;