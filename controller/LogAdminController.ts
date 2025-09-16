import { Controller } from "../libs/Controller";
import { Request, Response } from "express";

export class LogAdminController extends Controller {
  constructor(request: Request, response: Response) {
    super(request, response);
  }

  public FormLogAdmin() {
    this.response.render("pages/logAdmin", {});
  }
}
