export class Users {
    protected id_visitor: number;
    protected first_name: string;
    protected last_name: string;
    protected years: number;

    constructor( id_visitor: number,  first_name: string, last_name: string, years: number) {
        this.id_visitor = id_visitor;
        this.first_name = first_name;
        this.last_name = last_name;
        this.years = years;
    }
}