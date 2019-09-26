const request = require('supertest');
const db = require('../database/dbConfig.js');
const Users = require('./users-model.js');


describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  })

  describe('find', () => {
    it('should return a empty array fron the users route', async () => {
      const user = await Users.find();
      expect(user).toEqual([]);
    });
  });

  describe('findById', () => {
    it('should return the user at provided id', async () => {
      const testUser = {
        username: "bruh",
        password: "badpassword",
        name: 'John Doe',
      }
      await Users.add(testUser);

      let user = await Users.findById(1);

      expect(user.username).toBe("bruh");
      expect(user.name).toBe('John Doe');
    });
  });

  describe('add', () => {
    it('should add provided books to db', async () => {
      let testUser = {
        username: "bruh",
        password: "badpassword",
        name: 'John Doe',
      }
      await Users.add(testUser);
      testUser = {
        username: "Hahaha",
        password: "badpassword",
        name: 'Jane Doe',
      }
      await Users.add(testUser);

      const user = await db('users');

      expect(user).toHaveLength(2);
    });
  });

  describe('remove', () => {
    it('should remove a user at provided id', async () => {
      let testUser = {
        username: "bruh",
        password: "badpassword",
        name: 'John Doe',
      }
      await Users.add(testUser);

      let id = 1;
      await Users.remove(id);

      const user = await db('users');
      expect(user).toEqual([]);
    });
  });
});
