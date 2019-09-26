const server = require('../api/server.js');
const request = require('supertest');
const prepTestDB = require('../helpers/prepTestDB.js');
jest.mock('../auth/authenticate-middleware.js')

// beforeEach(prepTestDB);

describe('reviews', () => {
    it('post /', async () => {
        const res = await request(server)
            .post('/api/reviews')
            .send({
                "review": "New review5.",
                "stars": 4,
                "reviewer_id": 2,
                "book_id": 1
            });
        expect(res.status).toBe(201);
    });

    // it('put /', async () => {
    //     const res = await request(server)
    //         .put('/api/reviews/10')
    //         .send({
    //             "title": "some title6",
    //             "publisher": "some publisher",
    //             "license": "some license",
    //             "authors": "author1, author2, author3"
    //         });
    //     expect(res.status).toBe(200);
    // });

    // it('delete /', async () => {
    //     const res = await request(server)
    //         .delete('/api/books/10')
    //     expect(res.status).toBe(204);
    // });

    it('get /', async () => {
        const res = await request(server).get('/api/reviews');
        expect(res.status).toBe(200);

        // console.log(res.body);

        expect(res.body[0]).toEqual({
            "id": 1,
            "review": "New review5.",
            "stars": 4,
            "reviewer_id": 2,
            "book_id": 1,
            "name": "admin",
            "username": "admin"
        },);

    });
});