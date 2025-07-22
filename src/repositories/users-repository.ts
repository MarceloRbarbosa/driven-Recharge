import connection from "config/database";
import { CreateUser, User } from "protocols/protocolTypes";

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
    const users = await connection.query<User>(`SELECT * FROM users`)
    return users.rows
}

async function findUserByDocument(document:String) {
    const user = await connection.query<User>(`
        SELECT * FROM users WHERE document = $1
        `, [document])
        return user.rows[0];
}

async function findUserById(id:Number) {
    const user = await connection.query<User>(`
        SELECT * FROM users WHERE id = $1
        `,[id])
        return user.rows[0]
}


const userRepository = {
    createNewUser,
    findAllUsers,
    findUserByDocument,
    findUserById
}

export default userRepository;