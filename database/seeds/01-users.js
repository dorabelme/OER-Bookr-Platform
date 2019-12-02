const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  return knex('users').insert([
    { username: "admin", password: bcrypt.hashSync("admin1234", 8), name: 'Henry Blevins' },
    { username: "testuser", password: bcrypt.hashSync("testuser1234", 8), name: 'Elliot Alderson' }
  ])
}