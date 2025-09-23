import { Reserve } from "../Reserve";
import { Ticket } from "../Ticket";
import { Visitor } from "../Visitor";

export interface ReadTicketClient {
  id_visitor: number;
  first_name: string;
  last_name: string;
  years: number;
  id_ticket: number;
  dates: Date;
  type: string;
  id_park: number;
  quantity: number;
}

export class TicketClient extends Ticket {
  protected reserve: Reserve;
  protected visitor: Visitor;

  constructor(
    id_visitor: number,
    first_name: string,
    last_name: string,
    years: number,
    id_ticket: number,
    dates: Date,
    type: string,
    id_park: number,
    quantity: number
  ) {
    super(id_ticket, dates, type, id_park);

    this.reserve = new Reserve(id_ticket, id_visitor, dates, quantity);
    this.visitor = new Visitor(id_visitor, first_name, last_name, years);
  }

  static fromRow(row: ReadTicketClient): TicketClient {
    return new TicketClient(
      row.id_visitor,
      row.first_name,
      row.last_name,
      row.years,
      row.id_ticket,
      row.dates,
      row.type,
      row.id_park,
      row.quantity
    );
  }
  getReserve() {
    return this.reserve;
  }

  getVisitor() {
    return this.visitor;
  }
}
