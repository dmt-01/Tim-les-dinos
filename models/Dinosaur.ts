export interface DinosaurTypeRow {
  id: number;
  breed: string;
  name: string;
  id_park: number;
}

export class Dinosaur {
  protected id: number;
  protected breed: string;
  protected name: string;
  protected id_park: number;

  constructor(id: number, breed: string, name: string, id_park: number) {
    this.id = id;
    this.breed = breed;
    this.name = name;
    this.id_park = id_park;
  }

  static fromRow(row: DinosaurTypeRow): Dinosaur {
    return new Dinosaur(row.id, row.breed, row.name, row.id_park);
  }

  getId() {
    return this.id;
  }

  getBreed() {
    return this.breed;
  }

  getName() {
    return this.name;
  }

  getIdPark() {
    return this.id_park;
  }
}
