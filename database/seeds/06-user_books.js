exports.seed = function (knex) {
            return knex('user_books').insert([
                { book_id: 1, user_id: 1 },
                { book_id: 1, user_id: 2 },
                { book_id: 2, user_id: 1 },
                { book_id: 3, user_id: 2 },
            ]);
};
