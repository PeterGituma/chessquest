import prisma from "../db";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, username } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        username,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};