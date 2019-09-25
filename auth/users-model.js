const db = require('../database/dbConfig.js');
const BooksModel = require('./../books/books-model.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove
};

function find() {
    return db('users').select('id', 'username', 'name');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id');

    return findById(id);
}

function findById(id) {
    const userPromise = db('users').where({ id }).first();    
    const booksPromise = findBooksForUser(id);
    const jointPromise = Promise.all([userPromise, booksPromise]);

    const returnPromise = jointPromise.then(arr => {
        const user = arr[0];
        const books = arr[1];

        return {...user, books: books}
    })

    return returnPromise;
}

function findBooksForUser(user_id) {
    const returnPromise = db('user_books as BR')
        .innerJoin("books as B", "B.id", "=", "BR.book_id")
        .select(
            "B.id"
        )
        .where({ user_id: user_id }).then(book_ids_object_array => {
            const book_id_array = book_ids_object_array.map(book_id => book_id.id)

            return Promise.all(book_id_array.map(bookId => BooksModel.getBooksById(bookId)))
        })

    return returnPromise;
}

function remove() {
    return db('actions')
        .where('id', id)
        .del();
}
