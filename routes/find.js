const express = require('express');
const router = express.Router();

// Functions
const updateBounty = require('./functions/updateBounty')

// Database Models
const Bounty = require('../models/Bounty');

router.get('/:started?', (req, res) => {
    let search = req.params.started === 'started';
    Bounty.find({ isStarted: search })
        .then(reply => res.send(reply))
        .catch(err => res.status(400).send(
            [{ msg: 'Something happened!' }]
        ))
});

router.get('/status/:id', (req, res) => {
    Bounty.find({ _id: req.params.id })
        .then(reply => res.send(reply))
        .catch(err => res.status(400).send([{ msg: 'Something happened!' }]));
});

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
