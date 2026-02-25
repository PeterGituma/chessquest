import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@chessquest.com",
      username: "testuser",
    },
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(async () => prisma.$disconnect());