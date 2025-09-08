export class Reserve {
    protected id_ticket: number;
    protected dates: Date;
    protected type: string;
    protected id_park: number;

    constructor( id_ticket: number,  dates: Date, type: string, id_park: number) {
        this.id_ticket = id_ticket;
        this.dates = dates;
        this.type = type;
        this.id_park = id_park;
    }
}