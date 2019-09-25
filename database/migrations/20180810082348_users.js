exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users
      .string('name')
      .notNullable();
    users
      .string('username', 25)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
  })

    .createTable('books', books => {
      books.increments();
      books.string('title', 128)
        .notNullable();
      books.string('publisher', 400)
      books.string('license', 400)
        .notNullable();
      books.string('access_link');
      books.string('thumbnail');
      books.string('description')
    })

    .createTable('authors', books => {
      books.increments();
      books.string('name', 128)
        .notNullable();
    })

    .createTable('book_authors', book_authors => {
      book_authors.increments();
      // Foreign keys
      book_authors.integer('book_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      book_authors.integer('author_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('authors')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

    .createTable('user_books', user_books => {
      user_books.increments();
      // Foreign keys
      user_books.integer('book_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      user_books.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
  
    .createTable('reviews', reviews => {
      reviews.increments();
      reviews.string('review', 1024)
        .notNullable();
      reviews.integer('stars')
      // Foreign keys
      reviews.integer('reviewer_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      reviews.integer('book_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })  
};


exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('reviews')
    .dropTableIfExists('book_authors')
    .dropTableIfExists('authors')
    .dropTableIfExists('books')
    .dropTableIfExists('users')
    .dropTableIfExists('user_books')
};
