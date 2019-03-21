const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Models here
const User = require('../models/User');

// Routes
router.post('/login', (req, res) => {
    res.send('Good');
});

router.post('/register', (req, res) => {
    res.send('Good');
});

router.get('/logout', (req, res) => {
    res.send('Good');
});



module.exports = router;