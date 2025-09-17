export interface ParkTypeRow {
  id_park: number | null;
  location: string;
}

export class Park {
  protected id_park: number | null;
  protected location: string;

  constructor(id_park: number | null, location: string) {
    this.id_park = id_park;
    this.location = location;
  }

  static fromRow(row: ParkTypeRow): Park {
    return new Park(row.id_park, row.location);
  }

  getId() {
    return this.id_park;
  }

  getLocation() {
    return this.location;
  }
}
