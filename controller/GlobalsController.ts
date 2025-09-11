import { Controller } from "../libs/Controller";
import { DinosaurRepository } from "../repositories/dinosaurRepository";
import { ParkRepository } from "../repositories/parkRepository";
import { Request, Response } from "express";
import { ReserveRepository } from "../repositories/reserveRepository";
import { TicketRepository } from "../repositories/ticketRepository";
import { UsersRepository } from "../repositories/usersRepository";
import { VisitorRepository } from "../repositories/visitorRepository";


export class GlobalsController extends Controller {
private dinosaurRepository: DinosaurRepository;
private parkRepository: ParkRepository;
private reserveRepository: ReserveRepository;
private ticketRepository: TicketRepository;
private usersRepository: UsersRepository;
private visitorRepository: VisitorRepository;

constructor(request: Request, response: Response) {
  super(request, response);

  this.dinosaurRepository = new DinosaurRepository();
  this.parkRepository = new ParkRepository();
  this.reserveRepository = new ReserveRepository();
  this.ticketRepository =new TicketRepository();
  this.usersRepository = new UsersRepository();
  this.visitorRepository = new VisitorRepository();
}

  public async homepage() {
    // const dinosaurs = await this.dinosaurRepository.findAll();
    // const parks = await this.parkRepository.findAll();
    // const reserves = await this.reserveRepository.findAll();
    // const tickets = await this.ticketRepository.findAll();
    // const users = await this.usersRepository.findAll();
    // const visitors = await this.visitorRepository.findAll();
    this.response.render("pages/home",  {});
  }
}
