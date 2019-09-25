const request = require('supertest');
const server = require('./server.js');
const db = require('../database/dbConfig.js');
const bcrypt = require('bcryptjs');


describe('server', () => {
    beforeEach(async () => {
        await db("users").truncate();
    });

    describe('POST /REGISTER', () => {
        it('should return 201 status', () => {
            return request(server).post('/api/auth/register')
                .send({
                    username: "dora",
                    password: "admin1234"
                })
                .set('Content-Type', 'application/json')
                .then(res => {
                    expect(res.status).toBe(201)
                    expect(res.body.username).toBe('dora')
                })
        })

        it('username should be {Name}', () => {
            return request(server).post('/api/auth/register')
                .send({
                    username: "blake",
                    password: "testuser1234"
                })
                .set('Content-Type', 'application/json')
                .then(res => {
                    expect(res.status).toBe(201)
                    expect(res.body.username).toBe('blake')
                })
        })
    })
});

let token;

describe('POST /LOGIN', () => {
    it('Token should exist', async () => {
        // await db.seed.run()
        await db('users').insert([
            { username: "admin", password: bcrypt.hashSync("admin", 16) },
            { username: "testuser", password: bcrypt.hashSync("test", 16) }
        ])

        const res = await request(server).post('/api/auth/login')
            .send({
                username: "admin",
                password: "admin1234"
            })
            .set('Content-Type', 'application/json')

        expect(res.status).toBe(200)
        expect(res.body.token).toBeTruthy()

        token = res.body.token;
    });

    it('should return 200 status', () => {
        return request(server).post('/api/auth/login')
            .send({
                username: "admin",
                password: "admin1234"
            })
            .set('Content-Type', 'application/json')
            .then(res => {
                expect(res.status).toBe(200)
                expect(res.body.message).toBe('You are logged in')
            });
    })

    it('username should be {Name}', () => {
        return request(server).post('/api/auth/login')
            .send({
                username: "testuser",
                password: "testuser1234"
            })
            .set('Content-Type', 'application/json')
            .then(res => {
                expect(res.status).toBe(200)
                expect(res.body.message).toBe('You are logged in')
            })
    })
})


// let hardcoded_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRvcmEiLCJpYXQiOjE1Njg5NDg3OTIsImV4cCI6MTU2OTAzNTE5Mn0.WnoD5kNuIoGrqct9ywgylDmQDGwe8kfLFfKe0b9TITg';

describe('GET /api/users', () => {
    it('returns json OK', () => {
        return request(server).get('/api/users')
            .expect('Content-Type', /json/)
    });

    it('should return 200 Status', () => {
        return request(server).get('/api/users')
            .set('Authorization', token)
            .then(res => {
                expect(res.status).toBe(200)
            })
    })

})





