const mongoose = require('mongoose');

// User Schema
const BountySchema = new mongoose.Schema({
    poster: {
        type: String,
        required: true
    },
    claimer: {
        type: String,
        required: true
    },
    bountyAmount:{
        type: Number,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true
    },
    isStarted: {
        type: Boolean,
        required: true
    },
    isPaid: {
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
    },
});

const Bounty = mongoose.model('Bounty', BountySchema);

module.exports = Bounty;
