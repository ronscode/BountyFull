const mongoose = require("mongoose");

// User Schema
const BountySchema = new mongoose.Schema({
  poster: {
    type: String,
    required: true
  },
  bountyTitle: {
    type: String
  },
  claimer: {
    type: String
  },
  bountyAmount: {
    type: Number
  },
  isStarted: {
    type: Boolean,
    required: true
  },
  isCleaned: {
    type: Boolean,
    required: true
  },
  isVerified: {
    type: Boolean,
    required: true
  },
  isPaid: {
    type: Boolean,
    required: true
  },
  isComplete: {
    type: Boolean,
    required: true
  },
  location: {
    type: mongoose.Mixed,
    required: true
  },
  pictures: {
    type: mongoose.Mixed,
    required: true
  },
  timeStarted: {
    type: String
  },
  timeEnded: {
    type: String
  }
});

const Bounty = mongoose.model("Bounty", BountySchema);

module.exports = Bounty;
