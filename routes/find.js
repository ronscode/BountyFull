const express = require('express');
const router = express.Router();

// Functions
const updateBounty = require('./functions/updateBounty')

// Database Models
const Bounty = require('../models/Bounty');

// List Bounties Route
router.get('/:started?', (req, res) => {
    let search = req.params.started === 'started';
    Bounty.find({ isStarted: search })
        .then(reply => res.send(reply))
        .catch(err => res.status(400).send(
            [{ msg: 'Something happened!' }]
        ))
});

// Update Bounty Route
router.get('/status/:id', (req, res) => {
    Bounty.find({ _id: req.params.id })
        .then(reply => res.send(reply))
        .catch(err => res.status(400).send([{ msg: 'Something happened!' }]));
});

// Get bounties posted by email
router.get('/all/:email', (req, res) => {
    Bounty.find({poster: req.params.email})
        .then(reply => res.status(200).send(reply))
        .catch(err => res.status(400).send([{ msg: 'Something happened!' }]));
})

// Update bounty status
router.put('/update/', (req, res) => {
    Bounty.findOne({ _id : req.body.id})
        .then(reply => {
            let update = updateBounty(reply._doc, req.body);
            if(update.errors && update.errors.length > 0){
                throw update.errors;
            } else{
                Bounty.findOneAndUpdate({ _id: update._id }, update)
                    .then(reply => res.send(update))
                    .catch(err => { throw [{ msg: 'Bounty not updated!' }] })
            }
        })
        .catch(err => res.status(400).send(err));
});


module.exports = router;
