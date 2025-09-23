import { TicketClient } from "../models/views/ReadTicketClient";
import { Repository } from "../libs/Repository";
import { Ticket } from "../models/Ticket";

export class TicketRepository extends Repository {
  findAll = async () => {
    const query = {
      name: "fetch-all-ticket",
      text: `SELECT * FROM ticket`,
    };

    try {
      const result = await this.pool.query(query);

      const tickets = result.rows.map((row) => {
        Ticket.fromRow(row);
      });
      return tickets;
    } catch (error) {
      console.log(error);
    }
    return [];
  };

  createTicket = async (ticket: TicketClient) => {
    const ticketQuery = {
      name: "create-ticket",
      text: `
      INSERT INTO ticket (dates, type, id_park)
      VALUES ($1, $2, $3)
      RETURNING id_ticket, dates
      `,
      values: [ticket.getDates(), ticket.getType(), ticket.getIdPark()],
    };
    try {
      const resultTicketQuery = await this.pool.query(ticketQuery);

      const idTicket = resultTicketQuery.rows[0].id_ticket;
      const dateTicket = resultTicketQuery.rows[0].dates;
      const visitor = ticket.getVisitor();

      const visitorQuery = {
        name: "create-ticket-visitor",
        text: `
    INSERT INTO visitor (first_name, last_name, years)
    VALUES ($1, $2, $3)
    RETURNING id_visitor
    `,
        values: [
          visitor.getFirstName(),
          visitor.getLastName(),
          visitor.getYears(),
        ],
      };

      const resultVisitorQuery = await this.pool.query(visitorQuery);

      const idVisitor = resultVisitorQuery.rows[0].id_visitor;
      const reserve = ticket.getReserve();

      const reserveQuery = {
        name: "create-reservation-ticket-visitor",
        text: `
      INSERT INTO reserve (id_ticket, id_visitor, dates, quantity)
      VALUES ($1, $2, $3, $4)
      `,
        values: [idTicket, idVisitor, dateTicket, reserve.getQuantity()],
      };

      await this.pool.query(reserveQuery);

      return ticket;
    } catch (error) {
      console.error("Erreur createTicket:", error);
      throw error;
    }
  };
}
