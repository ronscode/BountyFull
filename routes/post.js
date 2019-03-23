const express = require('express');
const router = express.Router();

// Core Functionality
const makeBounty = require('./functions/makeBounty');
const updateBounty = require('./functions/updateBounty');

// Database Models
const User = require('../models/User');
const Bounty = require('../models/Bounty');


// Routes for posting litter bounties
router.post('/', (req, res) => {
    const post = makeBounty(req.body);
    if(post.errors && post.errors.length > 0){
        res.status(400).send(post.errors)
    } else {
        let newBounty = new Bounty({ ...post })
        newBounty.save()
            .then(reply => res.send(reply))
            .catch(err => res.status(400).send(
                [{msg: 'Something happened!'}]
            ))
    }
});

router.put('/update/', (req, res) => {
    Bounty.findOne({ _id: req.body.id })
        .then(reply => {
            let update = updateBounty(reply, req.body);
            if(update.isVerified){
                /****************************
                        DO PAYMENT STUFF
                *****************************/
                update = updateBounty(update);
            }
            if(update.isPaid){ update = updateBounty(reply) }
            if(update.errors && update.errors.length > 0) {
                throw update.errors 
            } else{
                res.send(update);
            }
        })
        .catch(err => res.status(400).send(err));
});

module.exports = router;
