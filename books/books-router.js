const express = require("express");
const Books = require("./books-model.js");
const Authors = require("../authors/authors-model.js");
const BookAuthors = require("../book_authors/book-authors-model.js");

const router = express.Router();

// GET requests for books

// Get all books
router.get('/', (req, res) => {
    Books.getBooksExpanded()
        .then(books => res.status(200).json(books))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "The books information could not be retrieved." });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    getBook(id, res);
});


// POST request for books
router.post('/', (req, res) => {
    console.log(req.body);
    const { title, publisher, license, access_link, thumbnail, authors } = req.body;
    if (!title || !publisher || !license || !authors) {
        return res.status(400).json({ error: "Requires title, publisher, license and authors." });
    }

    const authorsArray = authors.split(",").map(author => author.trim());
    // console.log(authorsArray);

    const createdAuthorsPromise = Promise.all(authorsArray.map(author => Authors.addAuthor({ "name": author})));
    const createdBookPromise = Books.addBooks({ title, publisher, license, access_link, thumbnail });

    const bookAuthor = Promise.all([createdAuthorsPromise, createdBookPromise]);
    const createdBookAuthorsPromise = bookAuthor.then(arr => {
        const authors = arr[0];
        const book = arr[1];

        const bookAuthorsPromise = Promise.all(authors.map(author => {
            const book_author = { "book_id": book.id, "author_id": author.id };
            BookAuthors.addBookAuthor(book_author);
        }))
        
        return bookAuthorsPromise.then(_ => { return book })
    })

    createdBookAuthorsPromise
        .then(({ id }) => {
            getBook(id, res)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Server error inserting book." });
        });
});


// DELETE request for books
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Books.removeBooks(id)
        .then(deleted => {
            console.log(deleted);
            if (deleted) {
                res.status(204).end();
            } else {
                res.status(404).json({ error: "Book with ID does not exist." });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Server error deleting book." });
        });
});


// PUT request for projects
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, publisher, license } = req.body;
    if (!title || !publisher || !license) {
        return res.status(400).json({ error: "Requires title, publisher and license." });
    }
    
    Books.updateBooks(id, { title, publisher, license })
        .then(updated => {
            console.log(updated);
            if (updated) {
                getBook(id, res);
            } else {
                res.status(404).json({ error: "Book with ID is not found." });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Server error updating book." });
        });
});


// // GET reviews for a book
// router.get('/:book_id/reviews', (req, res) => {
//     const { book_id } = req.params;
//     Books.getBooksById(book_id)
//         .then((book) => {
//             if (book) {
//                 Books.findReviewsForBook(book_id)
//                     .then(reviews => {
//                         res.status(200).json(reviews);
//                     })
//             } else {
//                 res.status(404).json({ error: "Book with ID does not exist." });
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: "Server error getting book reviews." });
//         });
// });

function getBook(id, res) {
    return Books.getBooksById(id)
        .then((book) => {
            console.log(book);
            if (book) {
                res.status(200).json(book);
            } else {
                res.status(404).json({ error: "Book with ID does not exist." });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error getting the book from the database." });
        });
}



module.exports = router;