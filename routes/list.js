const express = require('express');
const router = express.Router();

// Routes
router.get('/start', (req, res) => {
    res.send('Good');
});

router.get('/checkout', (req, res) => {
    res.send('Good');
});

router.get('/complete', (req, res) => {
    res.send('Good');
});

module.exports = router;
