import { Router } from "express";
import { getPuzzles, createPuzzle } from "../controllers/puzzleController";
import { solvePuzzle } from "../controllers/solveController";

const router = Router();

router.get("/", getPuzzles);
router.post("/", createPuzzle);

router.post("/solve", solvePuzzle);

export default router;