export interface ParkTypeRow {
  id: number | null;
  location: string;
}

export class Park {
  protected id: number | null;
  protected location: string;

  constructor(id: number | null, location: string) {
    this.id = id;
    this.location = location;
  }

  static fromRow(row: ParkTypeRow): Park {
    return new Park(row.id, row.location);
  }

  getId() {
    return this.id;
  }

  getLocation() {
    return this.location;
  }
}
