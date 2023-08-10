import express from "express";
import game from "./routes/game"

const router = express.Router();

router.use('/game', game);

export default router;