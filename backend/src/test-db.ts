import pkg from "@prisma/client"; // default import
const { PrismaClient } = pkg;  // extract PrismaClient class

const prisma = new PrismaClient(); // ✅ construct instance

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
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });