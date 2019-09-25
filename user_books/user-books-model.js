const db = require("../database/dbConfig.js");

module.exports = {
    addUserBooks,
    removeUserBooks,
    getUserBooks
    // getAuthorsById,
    // addAuthor,
    // updateAuthor,
    // removeAuthor
}

function getUserBooks() {
    return db("user_books")
}

// function getAuthorsById(id) {
//     return db("authors")
//         .where("id", id).first();
// }

// function updateAuthor(id, changes) {
//     return db("authors")
//         .where({ id })
//         .update(changes)
//         .then(_ => getAuthorsById(id))
// }

function addUserBooks(userBooks) {
    return db("user_books").insert(userBooks).then(ids => {
        return ids[0];
    });
}

function removeUserBooks(id) {
    return db("user_books")
        .where('id', id)
        .del();
}