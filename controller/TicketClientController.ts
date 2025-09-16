import { Controller } from "../libs/Controller";
import { Request, Response } from "express";

export class TicketClientController extends Controller {
  constructor(request: Request, response: Response) {
    super(request, response);
  }

  public formTicket() {
    this.response.render("pages/formClient", {});
  }
}
