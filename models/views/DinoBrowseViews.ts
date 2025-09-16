import { Dinosaur } from "../Dinosaur";

export interface DinoBrowseViewsTypeRow {
  id: number | null;
  breed: string;
  name: string;
  id_park: number;
}

export class DinoBrowseViewsTypeRow extends Dinosaur {
  id: number | null;
  breed: string;
  name: string;
  id_park: number;

  constructor() {
    super()
  }

}
