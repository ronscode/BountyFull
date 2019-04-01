const express = require("express");
const router = express.Router();

// Core Functionality
const makeBounty = require("./functions/makeBounty");
const updateBounty = require("./functions/updateBounty");

// Database Models
const Bounty = require("../models/Bounty");
const User = require("../models/User");

// Routes for posting litter bounties
router.post("/", (req, res) => {
  const post = makeBounty(req.body);
  if (post.errors && post.errors.length > 0) {
    res.status(400).send(post.errors);
  } else {
    let newBounty = new Bounty({ ...post });
    console.log(newBounty);
    newBounty.save()
      .then(reply => res.send(reply))
      .catch(err => res.status(400).send([{ msg: "Something happened!" }]));
  }
});

router.put("/update/", (req, res) => {
  Bounty.findOne({ _id: req.body._id })
    .then(reply => {
      let update = updateBounty(reply._doc);
      console.log("verified" + update.isVerified);
      if (update.isVerified) {
        /*****************************
              DO PAYMENT STUFF
        *****************************/
        update = updateBounty(update);

      }
      console.log("Paid" + update.isPaid);
      if (update.isPaid) {
        update = updateBounty(update);
      }
      console.log("Complete" + update.isComplete);
      if (update.errors && update.errors.length > 0) {
        console.log(update.errors); 
        throw update.errors;
      } else {
        console.log('updateDatabaseFinal')
        console.log(update)
        Bounty.findOneAndUpdate({ _id: update._id }, update)
          .then(reply => res.send(update))
          .catch(err => {
            throw [{ msg: "Bounty not updated!" }];
          });
      }
    })
    .catch(err => res.status(400).send(err));
});

module.exports = router;
