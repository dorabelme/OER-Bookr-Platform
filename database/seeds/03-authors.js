exports.seed = function (knex) {
            return knex('authors').insert([
                { name: 'Lynn Marecek' },                  // 1
                { name: 'MaryAnne Anthony-Smith' },        // 2
                { name: 'Jay Abramson' },                  // 3
                { name: 'Alexander Holmes' },              // 4
                { name: 'Barbara Illowsky,' },             // 5
                { name: 'Susan Dean' },                    // 6
                { name: 'Glen Krutz' },                    // 7
                { name: 'Sylvie Waskiewicz' },             // 8
                { name: 'Steven A. Greenlaw' },            // 9
                { name: 'David Shapiro' },                 // 10
                { name: 'Steven A. Greenlaw' },            // 11
                { name: 'Lawrence J. Gitman' },            // 12
                { name: 'Carl McDaniel' },                 // 13
                { name: 'Amit Shah' },                     // 14
                { name: 'Monique Reece' },                 // 15
                { name: 'Linda Koffel,' },                 // 16
                { name: 'Bethann Talsma' },                // 17
                { name: 'James C. Hyatt' },                // 18
                { name: 'Michael Laverty' },               // 19
                { name: 'Chris Littel' },                  // 20
                { name: 'Mitchell Franklin' },             // 21
                { name: 'Patty Graybeal' },                // 22
                { name: 'Dixon Cooper' },                  // 23



        
            ])
}