import connection from "config/database";
import { Request, Response } from "express";
import { PhonesData } from "protocols/protocolTypes";


async function insertNewPhone(phoneData:PhonesData) {
    const {phone_number, carrier_id, user_id, description} = phoneData;
    const result = await connection.query(`
        INSERT INTO phones (phone_number, carrier_id, user_id, description)
        VALUES ($1, $2, $3,$4)
        `,[phone_number, carrier_id, user_id, description])
}