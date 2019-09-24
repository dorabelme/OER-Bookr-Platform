const express = require('express');

const Authors = require('./authors-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Authors.getAuthors()
        .then(authors => {
            res.json(authors);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get authors.' });
        });
});


router.post('/', (req, res) => {
    const authorData = req.body;

    Authors.addReview(authorData)
        .then(author => {
            res.status(201).json(author);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new author.' });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Reviews.getAuthorsById(id)
        .then(author => {
            if (author) {
                Authors.updateAuthor(id, changes)
                    .then(updatedAuthor => {
                        return res.json(updatedAuthor);
                    });
            } else {
                res.status(404).json({ message: 'Could not find author with given id.' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to update author.' });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Authors.removeAuthor(id)
        .then(deleted => {
            if (deleted) {
                return res.status(204).end();
            } else {
                res.status(404).json({ message: 'Could not find author with given id.' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to delete author.' });
        });
});


module.exports = router;