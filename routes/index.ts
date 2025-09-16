import { Router } from "express";
import globalRouter from "./globals";
import ticketRouter from "./ticketClient";

const router = Router();

router.use(globalRouter);
router.use("/ticket", ticketRouter);

export default router;