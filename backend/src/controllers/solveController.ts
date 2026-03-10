import prisma from "../db";
import { Request, Response } from "express";

export const solvePuzzle = async (req: Request, res: Response) => {
  try {
    const { userId, puzzleId, move } = req.body;

    const puzzle = await prisma.puzzle.findUnique({
      where: { id: puzzleId }
    });

    if (!puzzle) {
      return res.status(404).json({ error: "Puzzle not found" });
    }

    const correct = move === puzzle.solution;

    let xpGained = 0;

    if (correct) {
      xpGained = puzzle.difficulty * 10;

      await prisma.user.update({
        where: { id: userId },
        data: {
          xp: { increment: xpGained }
        }
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    res.json({
      correct,
      xpGained,
      newXP: user?.xp
    });

  } catch (error) {
    res.status(500).json({ error: "Puzzle solving failed" });
  }
};