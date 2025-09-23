import { Router } from "express";
import { TicketClientController } from "../controller/TicketClientController";

const ticketRouter = Router();

ticketRouter.get("/", (request, response) => {
  const controller = new TicketClientController(request, response);
  controller.formTicket();
});

ticketRouter.post("/", (req, res) => {
  const controller = new TicketClientController(req, res);
  controller.createTicket();
});

ticketRouter.get("/confirmation", (req, res) => {
  res.render("pages/logAdmin", { message: "Votre réservation est bien enregistrée !" });
});


export default ticketRouter;
