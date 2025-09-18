import { Router } from "express";
import { DinosaurController } from "../controller/DinosaurController";

const dinosaurRouter = Router();

dinosaurRouter.get("", (request, response) => {
  const controller = new DinosaurController(request, response);
  controller.allDinosaur();
});

dinosaurRouter.get("/:id", (request, response) => {
  const controller = new DinosaurController(request, response);
  controller.detailDinosaur();
});

export default dinosaurRouter;
