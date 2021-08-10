-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "topic" VARCHAR(255) NOT NULL,
    "publicationDate" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
