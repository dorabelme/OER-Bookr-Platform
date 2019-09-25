const db = require("../database/dbConfig.js");

module.exports = {
    addBookAuthor,
}

function addBookAuthor(book_author) {
    return db("book_authors").insert(book_author, "id").then(ids => {
        return ids[0];
    });
}
