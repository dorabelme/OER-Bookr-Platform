const db = require("../database/dbConfig.js");

module.exports = {
    getAuthors,
    getAuthorsById,
    addAuthor,
    updateAuthor,
    removeAuthor
}

function getAuthors() {
    return db("authors")
}

function getAuthorsById(id) {
    return db("authors")
        .where("id", id).first();
}

function addAuthor(author) {
    return db("authors").insert(author, "id").then(ids => {
        return getAuthorsById(ids[0]);
    });
}

function updateAuthor(id, changes) {
    return db("authors")
        .where({ id })
        .update(changes)
        .then(_ => getAuthorsById(id))
}

function removeAuthor(id) {
    return db("authors")
        .where('id', id)
        .del();
}
