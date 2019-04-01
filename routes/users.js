const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Models here
const User = require('../models/User');

// Functions
const makeUser = require('./functions/makeUser')

// Routes for login
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.user.email })
        .then(user => {
            if (user) {
                res.status(200).send(user);
            } else {
                const newUser = new User(makeUser(req.body.user));
                newUser
                    .save()
                    .then(user => res.status(200).json(user))
                    .catch(err => console.log(err));
            }
        })
        .catch(err => {
            res.status(400).send([{ msg: 'Something happened, user not saved!' }]);
        });
});

// Logout Route
router.get('/logout', (req, res, next) => {
    req.logout();
    res.sendStatus(200);
})

module.exports = router;