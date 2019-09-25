const db = require("../database/dbConfig.js");

module.exports = {
    getBooks,
    getBooksExpanded,
    getBooksById,
    addBooks,
    updateBooks,
    removeBooks,
    findReviewsForBook,
    findAuthorsForBook
}

function getBooks() {
    return db("books");
}

function average(l) {
    var total = 0;
    for (var i = 0;i < l.length; i++) {
        total += l[i];
    }
    var avg = total / l.length;
    return avg
}

function getBooksExpanded() {
    const booksPromise = getBooks();

    const finalPromise = booksPromise.then(books => {
        const arrOfPromises = books.map(book => expandBook(book))

        const promiseOfBooks = Promise.all(arrOfPromises)
        return promiseOfBooks
    })

    return finalPromise
}

function expandBook(book) {
    const reviewsPromise = findReviewsForBook(book.id)
    const authorsPromise = findAuthorsForBook(book.id)

    const reviewsAndAuthors = Promise.all([reviewsPromise, authorsPromise])

    const bookPromise = reviewsAndAuthors.then(arr => {
        const reviews = arr[0]
        const authors = arr[1]

        const reviewStars = reviews.map(review => review.stars)
        const bookStars = average(reviewStars)

        return { ...book, reviews: reviews, authors: authors, stars: bookStars }
    })

    return bookPromise
}

function getBooksById(id) {
    const bookPromise = db("books")
        .where("id", id).first()

    const expandedBook = bookPromise.then(book => expandBook(book))
    
    return expandedBook;
}

function addBooks(book) {
    return db("books").insert(book, "id").then(ids => {
        return getBooksById(ids[0]);
    });
}

function updateBooks(id, changes) {
    return db("books")
        .where({ id })
        .update(changes)
        .then(_ => getBooksById(id))
}

function removeBooks(id) {
    return db("books")
        .where('id', id)
        .del();
}

function findReviewsForBook(id) {
    return db('reviews as R')
        // .innerJoin("reviews as R", "B.id", "=", "R.book_id")
        .select(
            "R.id",
            "R.review",
            "R.stars",
        )
        .where({ book_id: id });
}

function findAuthorsForBook(id) {
    return db('book_authors as BR')
        .innerJoin("authors as A", "A.id", "=", "BR.author_id")
        .select(
            "A.id",
            "A.name"
        )
        .where({ book_id: id });
}