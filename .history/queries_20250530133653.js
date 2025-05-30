// 1. Find all books in a specific genre (e.g., "Fiction"):
db.books.find({ genre: "Fiction" })

// 2. Find books published after a certain year (e.g., after 1950):
db.books.find({ published_year: { $gt: 1950 } })

// 3. Find books by a specific author (e.g., "George Orwell"):
db.books.find({ author: "George Orwell" })

// 4. Update the price of a specific book (e.g., update "1984" to 15.99):
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 15.99 } }
)

// 5. Delete a book by its title (e.g., "Moby Dick"):
db.books.deleteOne({ title: "Moby Dick" })



// Task 3: Advanced Queries
// 1. Find books that are both in stock and published after 2010,
//    projecting only title, author, and price:
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
)

// 2. Sort books by price in ascending order (projecting title, author, price):
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 })

// 3. Sort books by price in descending order (projecting title, author, price):
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: -1 })

// 4. Pagination: Get page 2 (books 6-10), 5 books per page, sorted by price ascending:
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 }).skip(5).limit(5)

// 5. Pagination: Get page 1 (books 1-5), 5 books per page, sorted by price ascending:
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 }).skip(0).limit(5)