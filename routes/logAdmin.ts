import { Router } from "express";
import { LogAdminController } from "../controller/LogAdminController";

const logAdminRouter = Router();

logAdminRouter.get("/", (request, response) => {
  const controller = new LogAdminController(request, response);
  controller.FormLogAdmin();
});

export default logAdminRouter;
