const db = require('../database/dbConfig.js');

module.exports = async () => {
    console.log("testing");

    await db('reviews').truncate();
    await db('book_authors').truncate();
    await db('authors').truncate();
    await db('user_books').truncate();
    await db('books').truncate();
    await db('users').truncate();

    const results = await db('users').select('id', 'username', 'name');
    console.log(results);

    return db.seed.run();

    // return db.migrate.rollback()
    //     .then(() => db.migrate.latest())
    //     .then(() => db.seed.run());
};