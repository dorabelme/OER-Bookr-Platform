const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  // return knex('users').truncate()
  //   .then(function () {
      return knex('users').insert([
        { username: "admin", password: bcrypt.hashSync("admin1234", 16), name: 'Henry Blevins' },
        { username: "testuser", password: bcrypt.hashSync("testuser1234", 16), name: 'Elliot Alderson' }
      ])
    // })
}