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

  public async detailDinosaur() {
  const requestDinosaurId = parseInt(this.request.params.id, 10);

  if (isNaN(requestDinosaurId)) {
    return this.response.status(400).send("ID invalide");
  }

  const dinosaur = await this.DinosaurRepository.findById(requestDinosaurId);

  if (!dinosaur) {
    return this.response.status(404).send("Dinosaure introuvable");
  }

  this.response.render("pages/detailDinosaur", { dinosaur });
}
}
