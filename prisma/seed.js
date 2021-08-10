const { PrismaClient } = require("@prisma/client");
const { buildBooksDatabase } = require("../src/utils/mockData");

const dbClient = new PrismaClient();

const books = buildBooksDatabase();
console.log(books);

async function seed() {
  await dbClient.book.createMany({ data: books });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });
