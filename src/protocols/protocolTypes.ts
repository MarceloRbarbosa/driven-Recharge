export type CreatePhone = Omit<Phone, "id">;
export type CreateCarrier = Omit<Carrier, "id">;
export type CreaterRecharge = Omit<Recharge, "id">;

export type Phone = {
    id: number,
    phone_number: string,
    carrier_id: number,
    user_id: number,
    description: string
}

export type Carrier = {
id: number,
name: string,
code: number
}

export type User = {
    id: number,
    document: string,
    name: string;
}

export type Recharge = {
    id: number,
    phone_id: number,
    amount: number,
    created_at: Date;
}