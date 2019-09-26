const request = require('supertest');
const db = require('../database/dbConfig.js');
const Wish = require('./user-books-model.js');


describe('wishlist model', () => {
    beforeEach(async () => {
        await db('user_books').truncate();
    })

    describe('getUserBooks', () => {
        it('should return a empty array fron the wishlist route', async () => {
            const wish = await Wish.getUserBooks();
            expect(wish).toEqual([]);
        });
    });

    describe('addUserBooks', () => {
        it('should add provided wishlist books to db', async () => {
            let testWish = {
                book_id: 3,
                user_id: 2,
            }
            await Wish.addUserBooks(testWish);
            testWish = {
                book_id: 3,
                user_id: 2,
            }
            await Wish.addUserBooks(testWish);

            const wish = await db('user_books');

            expect(wish).toHaveLength(2);
        });
    });

    describe('remove', () => {
        it('should remove a wishlist book at provided id', async () => {
            let testWish = {
                book_id: 3,
                user_id: 2,
            }
            await Wish.addUserBooks(testWish);
            testWish = {
                book_id: 3,
                user_id: 2,
            }
            await Wish.addUserBooks(testWish);

            let id = 1;
            await Wish.removeUserBooks(id);

            const wish = await db('user_books');

            expect(wish).toHaveLength(1);
        });
    });
});