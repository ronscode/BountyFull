const express = require('express');
const router = express.Router();
const makeBounty = require('./functions/makeBounty');

// Database Models
const User = require('../models/User');
const Bounty = require('../models/Bounties');


// Routes for posting litter bounties
router.post('/', (req, res) => {
    let newBounty = makeBounty(req.body);
    if(newBounty.errors.length > 0){
        res.status(400).send(newBounty.errors)
    } else {
        Bounty.save()
            .then(reply => res.status(200).json(reply))
            .catch(err => res.status(400).send(
                [{msg: 'Something happened!'}]
            ))
    }
});

router.put('/update/:id', (req, res) => {
    let { id } = req.params;
    res.send('Good');
});

router.put('/verify/:id', (req, res) => {
    let { id } = req.params;
    res.send('Good');
});

module.exports = router;
