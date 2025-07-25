import connection from "../config/database";
import { CreateUser, User, Phone } from "protocols/protocolTypes";

async function createNewUser(userData:CreateUser) {
    const { document, name } = userData;
    const result = await connection.query<User>(`
        INSERT INTO users (document, name)
        VALUES($1, $2)
        RETURNING *
        `, [ document, name]);
        return result.rows[0];
}

async function findAllUsers() {
    const result = await connection.query<User>(`SELECT * FROM users`)
    const users = result.rows;

    for(const user of users) {
        const result = await connection.query<Phone>(`
            SELECT * FROM phones WHERE user_id = $1
            `, [user.id]);
        user.phones= result.rows
    }
    return users
}

async function findUserByDocument(document:String) {
    const user = await connection.query<User>(`
        SELECT * FROM users WHERE document = $1
        `, [document])
    return user.rows[0];
}

async function findUserById(id:number) {
    const user = await connection.query<User>(`
        SELECT * FROM users WHERE id = $1
        `,[id])
    return user.rows[0]
}


const userRepository = {
    createNewUser,
    findAllUsers,
    findUserByDocument,
    findUserById,
}

export default userRepository;