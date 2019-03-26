const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Models here
const User = require('../models/User');

// Capitalize function
let capitalize = (word) => word.slice(0, 1).toUpperCase() + word.slice(1)

// Routes for login
router.post('/register', (req, res) => {
    let { firstName, lastName, email, password, password2 } = req.body;
    let errors = [];
    firstName = capitalize(firstName);
    lastName = capitalize(lastName);

    // Check fields for errors
    if (!(firstName && lastName && email && password && password2)) {
        errors.push({ msg: 'Please fill in all fields' });
    }
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }
    if (password === undefined || password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }

    // Register user on no errors
    if (errors.length > 0) {
        res.status(422).send(errors);
    } else {
        User.findOne({ email: email })
            .then(user => {
                if(user) {
                    res.status(400).send([{ msg: 'Email already registered'}])
                } else{
                    const newUser = new User({
                        firstName,
                        lastName,
                        email,
                        password,
                        bio: '',
                        profilePic: '',
                        totalEarnings: 0,
                        totalHours: 0,
                        inProgress: false,
                        completed: [],
                        posted: [],
                    })

                    // Hash user password
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;

                            // Set password
                            newUser.password = hash;

                            // save user
                            newUser.save()
                                .then(user => {
                                    res.status(200).json({
                                        ...user._doc,
                                        password: undefined,
                                        date: undefined
                                    })
                                })
                                .catch(err => console.log(err));
                        })
                    })
                }
            })
            .catch(err => {
                res.status(400).send([{ msg: 'Something happened, user not saved!' }])
            });
    }

});

// Login Handle
router.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        res.send({
            ...req.user._doc,
            password: undefined,
            date: undefined
        })
    }
)

// Logout Route
router.get('/logout', (req, res, next) => {
    req.logout();
    res.sendStatus(200);
})

module.exports = router;