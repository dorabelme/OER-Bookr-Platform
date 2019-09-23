exports.seed = function (knex) {
    return knex('books').truncate()
        .then(function () {
            return knex('books').insert([
                { title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming', publisher: 'William Pollock', license: '', access_link: 'https://www.amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507/ref=sr_1_5?crid=2WUA5IJAH5DLY&keywords=books+javascript&qid=1569177402&sprefix=books+javasc%2Caps%2C132&sr=8-5', thumbnail: '../../assets/eloquent_thumbnail.jpeg' },
                { title: 'REST API Design Rulebook', publisher: 'O\'Reilly Media, Inc.', license: '', access_link: 'https://www.amazon.com/REST-Design-Rulebook-Mark-Masse/dp/1449310508/ref=sr_1_6?keywords=rest+api&qid=1569177823&sr=8-6', thumbnail: '../../assets/restapi_thumbnail.jpeg' },
                { title: 'The Definitive Guide to SQLite (Expert\'s Voice in Open Source)', publisher: 'Apress', license: '', access_link: 'https://www.amazon.com/Definitive-Guide-SQLite-Experts-Source-ebook/dp/B004VHAZH6/ref=sr_1_3?keywords=sql+lite&qid=1569178032&sr=8-3', thumbnail: '../../assets/sqlite_thumbnail.jpeg' },
            ])
        })
}