const request = require('supertest');
const db = require('../database/dbConfig.js');
const Reviews = require('./reviews-model.js');


describe('reviews model', () => {
    beforeEach(async () => {
        await db('reviews').truncate();
    })

    describe('getReviews', () => {
        it('should return a empty array from the reviews route', async () => {
            const reviews = await Reviews.getReviews();
            expect(reviews).toEqual([]);
        });
    });

    describe('getReviewsById', () => {
        it('should return review with provided id', async () => {
            let testReview = {
                review: 'Easy to read and great content.',
                stars: 3,
                reviewer_id: 1,
                book_id: 3
            }
            await Reviews.addReview(testReview);

            let review = await Reviews.getReviewsById(1);

            expect(review.stars).toBe(3);
            expect(review.review).toBe('Easy to read and great content.')
        });
    });

    describe('addReview', () => {
        it('should add provided reviews to db', async () => {
            let testReview = {
                review: 'Easy to read and great content.',
                stars: 5,
                reviewer_id: 1,
                book_id: 3
            }
            await Reviews.addReview(testReview);

            testReview = {
                review: 'great content.',
                stars: 4,
                reviewer_id: 2,
                book_id: 3
            }
            await Reviews.addReview(testReview);

            const review = await db('reviews');

            expect(review).toHaveLength(2);
        });
    });

    describe('updateReview', () => {
        it('should update a review at provided id', async () => {
            let testReview = {
                review: 'Easy to read and great content.',
                stars: 5,
                reviewer_id: 1,
                book_id: 3
            }
            await Reviews.addReview(testReview);

            let id = 1;
            let testChanges = {
                review: 'Big Changes',
                stars: 5,
                reviewer_id: 1,
                book_id: 3
            }
            const review = await Reviews.updateReview(id, testChanges);

            expect(review.review).toBe('Big Changes');
            expect(review.id).toBe(1);
        });
    });

    describe('removeReview', () => {
        it('should remove a review at provided id', async () => {
            let testReview = {
                review: 'Easy to read and great content.',
                stars: 5,
                reviewer_id: 1,
                book_id: 3
            }
            await Reviews.addReview(testReview);

            let id = 1;
            await Reviews.removeReview(id);

            const review = await db('reviews');
            expect(review).toEqual([]);
        });
    });
});