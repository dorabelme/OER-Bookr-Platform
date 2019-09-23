exports.seed = function (knex) {
    return knex('authors').truncate()
        .then(function () {
            return knex('authors').insert([
                { name: 'Marijn Haverbeke' },  // 1
                { name: 'Mark Masse' },        // 2
                { name: 'Grant Allen' },       // 3
                { name: 'Mike Owens' },        // 4
        
            ])
        })
}