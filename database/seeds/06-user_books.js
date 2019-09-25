
exports.seed = function (knex) {
    // Deletes ALL existing entries
    // return knex('book_authors').truncate()
    //     .then(function () {
            // Inserts seed entries
            return knex('user_books').insert([
                { book_id: 1, user_id: 1 },
                { book_id: 1, user_id: 2 },
                { book_id: 2, user_id: 1 },
                { book_id: 3, user_id: 2 },
            ]);
        // });
};
