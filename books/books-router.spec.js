const server = require('../api/server.js');
const request = require('supertest');
const prepTestDB = require('../helpers/prepTestDB.js');
jest.mock('../auth/authenticate-middleware.js')

// beforeEach(prepTestDB);

describe('books', () => {
    
    // beforeEach(async () => {
    //     await db("books").truncate();
    // });

    let bookid;

    it('post /', async () => {
        const res = await request(server)
            .post('/api/books')
            .send({
                "title": "some title5",
                "publisher": "some publisher",
                "license": "some license",
                "authors": "author1, author2, author3"
            });
        
        bookid = res.body.id;
        
        expect(res.status).toBe(200);
    });

    it('put /', async () => {
        const res = await request(server)
            .put(`/api/books/${bookid}`)
            .send({
                "title": "some title6",
                "publisher": "some publisher",
                "license": "some license",
                "authors": "author1, author2, author3"
            });
        expect(res.status).toBe(200);
    });

    it('delete /', async () => {
        const res = await request(server)
            .delete(`/api/books/${bookid}`)
        expect(res.status).toBe(204);
    });

    it('get /', async () => {
        const res = await request(server).get('/api/books');
        expect(res.status).toBe(200);
    });
});