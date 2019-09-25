const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get users.' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Users.findById(id)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get user.' });
        });
});



module.exports = router;