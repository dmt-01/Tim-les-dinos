export class Users {
    protected id_user: number;
    protected email: string;
    protected password: string;
    protected id_park: number;

    constructor( id_user: number,  email: string, password: string, id_park: number) {
        this.id_user = id_user;
        this.email = email;
        this.password = password;
        this.id_park = id_park;
    }
}