const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const booksRouter = require('../books/books-router.js');
const reviewsRouter = require('../reviews/reviews-router.js');

const server = express();

const corsConfig = {
    // origin: 'http://localhost:3000',
    credentials: true,
}

server.use(helmet());
server.use(cors(corsConfig));
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/books', authenticate, booksRouter);
server.use('/api/reviews', authenticate, reviewsRouter);


module.exports = server;
