//USERS 
export type CreateUser = Omit<User, "id">;
export type User = {
    id: number,
    document: string,
    name: string,
    phones: Phone[]
}

// PHONES
export type CreatePhone = Omit<Phone, "id">;
export type Phone = {
    id: number,
    phone_number: string,
    carrier_id: number,
    user_id: number,
    description: string
}

export type PhoneByDoc = {
    id: number,
    document: string,
    number: Text
}
export type CreatePhoneWithUser = CreatePhone & {
    user_id: number, 
    name: string, 
    carrier:string
}

//CARRIERS
export type CreateCarrier = Omit<Carrier, "id">;
export type Carrier = {
    id: number,
    name: string,
    code: number
}


//RECHARGES
export type CreaterRecharge = { 
    phone_id: number,
    amount: number
}
export type Recharge = {
    id: number,
    phone_id: number,
    amount: number,
    created_at: Date;
}
export type RechargeByNumber = {
    id: number,
    phone_number: string,
    amount: number,
    date: Date;
}

//SUMMARY
export type SummaryPhone = { 
    id: number,
    phone_number: string,
    user_id: number,
    description: string,
    carrier_id: number,
    carrier_name: string,
    carrier_code: number,
    recharge_id:number,
    amount:number,
    date: Date,
}

//ERROR
export type CustomError = {
    type?: string;
}

