export interface IPerson {
    name: string;
    fullName: string;
}

export interface ILead {
    person: IPerson
    address: string
}