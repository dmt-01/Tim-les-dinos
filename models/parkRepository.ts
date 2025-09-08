export class Park {
    protected id_park: number;
    protected location: string;

    constructor( id_park: number, location: string) {
        this.id_park = id_park;
        this.location = location;
    }
}