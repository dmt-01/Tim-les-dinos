import { Router } from "express";
import globalRouter from "./globals";
import ticketRouter from "./ticketClient";
import logAdminRouter from "./logAdmin";
import dinosaurRouter from "./dinosaur";

const router = Router();

router.use(globalRouter);
router.use("/ticket", ticketRouter);
router.use("/logAdmin", logAdminRouter);
router.use("/dinausor", dinosaurRouter);

export default router;
