
export type CreateUser = Omit<User, "id" | "phones">;
export type User = {
    id: number,
    document: string,
    name: string,
    phones: Phone[]
}

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
    name: string,
    document: string,
    carrier:string
}

export type CreateCarrier = Omit<Carrier, "id">;
export type Carrier = {
    id: number,
    name: string,
    code: number
}

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

export type CustomError = {
    type?: string;
}

