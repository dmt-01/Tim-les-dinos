export interface DinosaurTypeRow {
  id_dinosaur: number;
  breed: string;
  name: string;
  id_park: number;
  description: string;
}

export class Dinosaur {
  protected id_dinosaur: number;
  protected breed: string;
  protected name: string;
  protected id_park: number;
  protected description: string;

  constructor(id_dinosaur: number, breed: string, name: string, id_park: number, description: string) {
    this.id_dinosaur = id_dinosaur;
    this.breed = breed;
    this.name = name;
    this.id_park = id_park;
    this.description = description;
  }

  static fromRow(row: DinosaurTypeRow): Dinosaur {
    return new Dinosaur(row.id_dinosaur, row.breed, row.name, row.id_park, row.description);
  }

  getId() {
    return this.id_dinosaur;
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

  getDescription(){
    return this.description;
  }
}
