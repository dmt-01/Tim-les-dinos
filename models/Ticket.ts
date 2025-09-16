export interface ReserveTypeRow {
  id_ticket: number | null;
  dates: Date;
  type: string;
  id_park: number | null;
}

export class Reserve {
  protected id_ticket: number | null;
  protected dates: Date;
  protected type: string;
  protected id_park: number | null;

  constructor(
    id_ticket: number | null,
    dates: Date,
    type: string,
    id_park: number | null
  ) {
    this.id_ticket = id_ticket;
    this.dates = dates;
    this.type = type;
    this.id_park = id_park;
  }

  static fromRow(row: ReserveTypeRow): Reserve {
    return new Reserve(row.id_ticket, row.dates, row.type, row.id_park);
  }

  getIdTicket() {
    return this.id_ticket;
  }

  getDates() {
    return this.dates;
  }

  getType() {
    return this.type;
  }

  getIdPark() {
    return this.id_park;
  }
}
