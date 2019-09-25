const express = require('express');
const Reviews = require('./reviews-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Reviews.getReviews()
        .then(reviews => {
            res.json(reviews);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get reviews.' });
        });
});

router.post('/', (req, res) => {
    const reviewData = req.body;

    Reviews.addReview(reviewData)
        .then(review => {
            res.status(201).json(review);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to create new review.' });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Reviews.getReviewsById(id)
        .then(review => {
            if (review) {
                Reviews.updateReview(id, changes)
                    .then(updatedReview => {
                        return res.json(updatedReview);
                    });
            } else {
                res.status(404).json({ message: 'Could not find review with given id.' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to update review.' });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Reviews.removeReview(id)
        .then(deleted => {
            if (deleted) {
                return res.status(204).end();
            } else {
                res.status(404).json({ message: 'Could not find review with given id.' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to delete review.' });
        });
});

module.exports = router;