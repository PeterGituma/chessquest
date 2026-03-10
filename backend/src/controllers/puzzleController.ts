import prisma from "../db";
import { Request, Response } from "express";

export const getPuzzles = async (req: Request, res: Response) => {
  try {
    const puzzles = await prisma.puzzle.findMany();
    res.json(puzzles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch puzzles" });
  }
};

export const createPuzzle = async (req: Request, res: Response) => {
  try {
    const { fen, solution, difficulty, concept } = req.body;

    const puzzle = await prisma.puzzle.create({
      data: {
        fen,
        solution,
        difficulty,
        concept,
      },
    });

    res.json(puzzle);
  } catch (error) {
    res.status(500).json({ error: "Failed to create puzzle" });
  }
};