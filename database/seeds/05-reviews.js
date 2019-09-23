exports.seed = function (knex) {
    // return knex('reviews').truncate()
    //     .then(function () {
            return knex('reviews').insert([
                { review: 'Very detailed and thorough, the explanations in this book helped me understand JS. Finding this resource was like taking a breath of fresh air.', stars: 5, reviewer_id: 1, book_id: 1 },
                { review: 'I really appreciate the pragmatic approach to REST API\'s. The book really helped my understanding of REST and web API design in general. Easy read.', stars: 4, reviewer_id: 1, book_id: 2 },
                { review: 'Easy to read and great content. Just the book I was seeking for: I recommend it. Didactic, concise and the chapter about SQL is very good.', stars: 5, reviewer_id: 1, book_id: 3 },
            ])
        // })
}