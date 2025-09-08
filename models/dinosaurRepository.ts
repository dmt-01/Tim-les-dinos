export class Dinosaur {
    protected id_dinosaur: number;
    protected breed: string;
    protected name: string;
    protected id_park: number;

    constructor( id_dinosaur: number, breed: string,  name: string,  id_park: number) {
        this.id_dinosaur = id_dinosaur;
        this.breed = breed;
        this.name = name;
        this.id_park = id_park;
    }
}