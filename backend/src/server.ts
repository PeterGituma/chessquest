import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users";
import puzzleRoutes from "./routes/puzzles";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/puzzles", puzzleRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 ChessQuest API running on http://localhost:${PORT}`);
});