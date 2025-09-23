import { Controller } from "../libs/Controller";
import { Request, Response } from "express";
import { TicketRepository } from "../repositories/ticketRepository";
import { TicketClient } from "../models/views/ReadTicketClient";
import { log } from "node:console";

export class TicketClientController extends Controller {
  constructor(request: Request, response: Response) {
    super(request, response);
  }

  public formTicket() {
    try {
      this.response.render("pages/formClient", {});
    } catch (error) {
      console.error(error);
      this.response.status(500).send("Erreur serveur");
    }
  }

  public async createTicket() {
    const { first_name, last_name, date, quantity, type } =
      this.request.body;

    try {
      const repo = new TicketRepository();
      const ticketClient = new TicketClient(
        0,
        first_name,
        last_name,
        0,
        0,
        new Date(date),
        type,
        1,
        Number(quantity),
      );

      console.log("avant");
      
      await repo.createTicket(ticketClient);

      console.log("apres");


      this.response.redirect("/confirmation");
    } catch (error) {
      console.error(error);
      this.response.status(500).send("Erreur serveur");
    }
  }
}
