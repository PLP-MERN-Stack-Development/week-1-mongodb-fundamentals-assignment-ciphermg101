// Find all books in a specific genre (e.g., "Fiction"):
db.books.find({ genre: "Fiction" })

// Find books published after a certain year (e.g., after 2000):
db.books.find({ published_year: { $gt: 2000 } })

// Find books by a specific author (e.g., "George Orwell"):
