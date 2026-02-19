const express = require("express");
const router = express.Router();
const validateYear = require("../middleware/validateYear");

// In-memory database
let books = [
  { id: 1, title: "React Essentials", author: "Aman Verma", year: 2019 },
  { id: 2, title: "Full Stack Pro", author: "Sneha Kapoor", year: 2023 },
  { id: 3, title: "Data Structures Deep Dive", author: "Rohit Mehta", year: 2021 }
];

router.get("/", (req, res) => {
  let { author, year, page = 1, limit = 5, search } = req.query;

  let filteredBooks = [...books];

  if (author) {
    filteredBooks = filteredBooks.filter(
      (b) => b.author.toLowerCase() === author.toLowerCase(),
    );
  }

  if (year) {
    filteredBooks = filteredBooks.filter((b) => b.year == year);
  }

  if (search) {
    filteredBooks = filteredBooks.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  page = parseInt(page);
  limit = parseInt(limit);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  res.render("books", {
    books: paginatedBooks,
    page,
    limit,
    total: filteredBooks.length,
  });
});

router.post("/", validateYear, (req, res) => {
  const { title, author, year } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author,
    year: parseInt(year),
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

module.exports = router;
