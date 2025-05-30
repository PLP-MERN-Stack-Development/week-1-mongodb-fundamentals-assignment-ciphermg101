// Find all books in a specific genre (e.g., "Fiction"):
db.books.find({ genre: "Fiction" })

// Find books published after a certain year (e.g., after 2004):
db.books.find({ published_year: { $gt: 2004 } })

// Find books by a specific author (e.g., "Emily Brontë"):
db.books.find({ author: "Emily Brontë" })


// Update the price of a specific book (e.g., "1984" to 15.99):
db.books.updateOne(
    { title: "1984" },
    { $set: { price: 15.99 } }
)

// Delete a book by its title (e.g., "Moby Dick"):
db.books.deleteOne({ title: "Moby Dick" })