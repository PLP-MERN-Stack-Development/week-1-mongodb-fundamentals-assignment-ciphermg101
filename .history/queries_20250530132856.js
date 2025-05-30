// Find all books in a specific genre (e.g., "Fiction"):
db.books.find({ genre: "Fiction" })

db.books.find({ publicationYear: { $gt: 2000 } })