const express = require('express');
const router = express.Router();

// Core Functionality
const makeBounty = require('./functions/makeBounty');

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
        console.log(newBounty)
        newBounty.save()
            .then(reply => res.status(200).json(reply))
            .catch(err => res.status(400).send(
                [{msg: 'Something happened!'}]
            ))
    }
});

router.put('/update/:id', (req, res) => {
    let { id } = req.params;
    Bounty.findOne({_id : id })
    res.send('Good');
});

router.put('/verify/:id', (req, res) => {
    let { id } = req.params;
    res.send('Good');
});

module.exports = router;
