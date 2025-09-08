export class Reserve {
    protected id_ticket: number;
    protected id_park: number;
    protected dates: Date;
    protected quantity: number;

    constructor( id_ticket: number, id_park: number,  dates: Date,  quantity: number) {
        this.id_ticket = id_ticket;
        this.id_park = id_park;
        this.dates = dates;
        this.quantity = quantity;
    }
}