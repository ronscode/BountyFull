const express = require('express');
const router = express.Router();

// Functions
const updateBounty = require('./functions/updateBounty')

// Database Models
const User = require('../models/User');
const Bounty = require('../models/Bounty');

// Routes for finding litter bounties
// router.get('/', (req, res) => {
//     Bounty.find
//     res.send('Good');
// });

router.get('/:started?', (req, res) => {
    let search = req.params.started === 'started';
    Bounty.find({ isStarted: search })
        .then(reply => res.send(reply))
        .catch(err => res.status(400).send(
            [{ msg: 'Something happened!' }]
        ))
});

router.put('/update/', (req, res) => {
    Bounty.findOne({ _id : req.body.id})
        .then(reply => {
            let update = updateBounty(reply, req.body);
            if(update.errors && update.errors.length > 0){
                throw update.errors;
            } else{
                res.send(update);
            }
        })
        .catch(err => res.status(400).send(err));
});


module.exports = router;
