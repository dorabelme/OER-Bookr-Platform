
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('book_authors').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('book_authors').insert([
                { book_id: 1, author_id: 1 },
                { book_id: 2, author_id: 2 },
                { book_id: 3, author_id: 3 },
                { book_id: 3, author_id: 4 },
            ]);
        });
};
