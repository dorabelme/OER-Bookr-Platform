exports.seed = function (knex) {
    // return knex('authors').truncate()
    //     .then(function () {
            return knex('authors').insert([
                { name: 'Lynn Marecek' },                  // 1
                { name: 'MaryAnne Anthony-Smith' },        // 2
                { name: 'Jay Abramson' },                  // 3
                { name: 'Alexander Holmes' },              // 4
                { name: 'Barbara Illowsky,' },             // 5
                { name: 'Susan Dean' },                    // 6
        
            ])
        // })
}