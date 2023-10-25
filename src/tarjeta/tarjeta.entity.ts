export class Tarjeta {
    card_number:number;
    cvv:number;
    expiration_month:string;
    expiration_year:string;
    email:string;
}

export enum Dominios {
    gmail = 'gmail.com',
    hotmail = 'hotmail.com',
    yahoo = 'yahoo.es'
}

// const  tarjeta = new Tarjeta()