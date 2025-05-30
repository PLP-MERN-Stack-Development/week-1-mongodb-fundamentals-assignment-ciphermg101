// 1. Find all books in a specific genre (e.g., "Fiction"):
db.books.find({ genre: "Fiction" })

// 2. Find books published after a certain year (e.g., after 198):
db.books.find({ published_year: { $gt: 2004 } })

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


// Task 4: Aggregation Pipeline

// 1. Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      genre: "$_id",
      averagePrice: { $round: ["$averagePrice", 2] },
      count: 1,
      _id: 0
    }
  }
])

// 2. Find the author with the most books in the collection
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 },
  { $project: { author: "$_id", bookCount: 1, _id: 0 } }
])

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $set: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: "$_id",
      count: 1,
      _id: 0
    }
  },
  { $sort: { decade: 1 } }
])


// Task 5: Indexing

// 1. Create an index on the title field for faster searches
db.books.createIndex({ title: 1 })

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// 3. Use the explain() method to demonstrate performance improvement

// Example: Find a book by title, showing the query plan
db.books.find({ title: "1984" }).explain("executionStats")

// Example: Find books by author and published_year, showing the query plan
db.books.find({ author: "George Orwell", published_year: 1949 }).explain("executionStats")