const db = require("../database/dbConfig.js");

module.exports = {
    addBookAuthor,
    // getAuthorsById,
    // addAuthor,
    // updateAuthor,
    // removeAuthor
}

// function getAuthors() {
//     return db("authors")
// }

// function getAuthorsById(id) {
//     return db("authors")
//         .where("id", id).first();
// }

function addBookAuthor(book_author) {
    return db("book_authors").insert(book_author, "id").then(ids => {
        return ids[0];
    });
}

// function updateAuthor(id, changes) {
//     return db("authors")
//         .where({ id })
//         .update(changes)
//         .then(_ => getAuthorsById(id))
// }

// function removeAuthor(id) {
//     return db("authors")
//         .where('id', id)
//         .del();
// }
