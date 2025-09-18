export interface ReserveTypeRow {
  id_ticket: number;
  id_visitor: number;
  dates: Date;
  quantity: number;
}

export class Reserve {
  protected id_ticket: number;
  protected id_visitor: number;
  protected dates: Date;
  protected quantity: number;

  constructor(
    id_ticket: number,
    id_visitor: number,
    dates: Date,
    quantity: number
  ) {
    this.id_ticket = id_ticket;
    this.id_visitor = id_visitor;
    this.dates = dates;
    this.quantity = quantity;
  }

  static fromRow(row: ReserveTypeRow): Reserve {
    return new Reserve(row.id_ticket, row.id_visitor, row.dates, row.quantity);
  }

  getId() {
    return this.id_ticket;
  }

  getIdPark() {
    return this.id_visitor;
  }

  getName() {
    return this.dates;
  }

  getDescription() {
    return this.quantity;
  }
}
