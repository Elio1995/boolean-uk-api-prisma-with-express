const { dbClient } = require("../../utils/dbClient");

async function getAllBooks(req, res) {
  const books = await dbClient.book.findMany();
  res.json({ books });
}

async function getAllFiction(req, res) {
  const topic = req.query.topic;

  const fictionBooks = await dbClient.book.findMany({
    where: {
      type: "Fiction",
      topic: { equals: topic, mode: "insensitive" },
    },
  });

  responseData = fictionBooks.length ? fictionBooks : "there's not here";

  res.json({ responseData });
}

module.exports = { getAllBooks, getAllFiction };
