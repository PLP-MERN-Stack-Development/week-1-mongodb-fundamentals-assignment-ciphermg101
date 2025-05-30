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