const db = require("../database/dbConfig.js");

module.exports = {
    getReviews,
    getReviewsById,
    addReview,
    updateReview,
    removeReview
}

function getReviews() {
    return db("reviews as R")
        .innerJoin("users as U", "U.id", "=", "R.reviewer_id")
        .select('R.*', 'U.name', 'U.username')
}

function getReviewsById(id) {
    return db("reviews as R")
        .innerJoin("users as U", "U.id", "=", "R.reviewer_id")
        .select('R.*', 'U.name', 'U.username')
        .where("R.id", id).first();
}

function addReview(review) {
    return db("reviews").insert(review, "id").then(ids => {
        return getReviewsById(ids[0]);
    });
}

function updateReview(id, changes) {
    return db("reviews")
        .where({ id })
        .update(changes)
        .then(_ => getReviewsById(id))
}

function removeReview(id) {
    return db("reviews")
        .where('id', id)
        .del();
}
