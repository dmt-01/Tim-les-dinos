import { Controller } from "../libs/Controller";
import { Request, Response } from "express";
import { DinosaurRepository } from "../repositories/dinosaurRepository";

export class DinosaurController extends Controller {
  private DinosaurRepository: DinosaurRepository

  constructor(request: Request, response: Response) {
    super(request, response);

    this.DinosaurRepository = new DinosaurRepository();
  }

  public async allDinosaur() {
    const Dinosaurs = await this.DinosaurRepository.findAll();

    this.response.render("pages/dinosaur", {Dinosaurs});
  }

  public detailDinosaur() {
    this.response.render("pages/detailDinosaur",{})
  }
}
