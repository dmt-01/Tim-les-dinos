import { Controller } from "../libs/Controller";
import { Request, Response } from "express";

export class DinosaurController extends Controller {
  constructor(request: Request, response: Response) {
    super(request, response);
  }

  public allDinosaur() {
    this.response.render("pages/dinosaur", {});
  }

  public detailDinosaur() {
    this.response.render("pages/detailDinosaur",{})
  }
}
