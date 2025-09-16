import { Router } from "express";
import { TicketClientController } from "../controller/TicketClientController";

const ticketRouter = Router();

ticketRouter.get("/", (request, response) => {
  const controller = new TicketClientController(request, response);
  controller.formTicket();
});

export default ticketRouter;
