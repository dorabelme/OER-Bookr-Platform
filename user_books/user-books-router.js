const express = require('express');
const UserBooks = require('./user-books-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    UserBooks.getUserBooks()
        .then(userBooks => {
            res.json(userBooks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get user books.' });
        });
});

router.post('/', (req, res) => {
    const userBooks = req.body;

    UserBooks.addUserBooks(userBooks)
        .then(userBook => {
            res.status(201).json(userBook);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add book to a user collection.' });
        });
}); 

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    UserBooks.removeUserBooks(id)
        .then(deleted => {
            if (deleted) {
                return res.status(204).end();
            } else {
                res.status(404).json({ message: 'Could not find user book with given id.' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to delete ser book.' });
        });
});


module.exports = router;