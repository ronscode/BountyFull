const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    postedBounty: {
        type: mongoose.Mixed
    },
    inprogressBounty: {
        type: mongoose.Mixed
    },
    claimedBounties: {
        type: mongoose.Mixed
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;