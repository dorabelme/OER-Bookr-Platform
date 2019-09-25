const db = require("../database/dbConfig.js");

module.exports = {
    addUserBooks,
    removeUserBooks,
    getUserBooks
}

function getUserBooks() {
    return db("user_books")
}

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