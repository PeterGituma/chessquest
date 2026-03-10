import { Router } from "express";
import { getPuzzles, createPuzzle } from "../controllers/puzzleController";

const router = Router();

router.get("/", getPuzzles);
router.post("/", createPuzzle);

export default router;