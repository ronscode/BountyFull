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
    totalEarnings: {
        type: Number,
        required: true
    },
    totalHours: {
        type: Number,
        required: true
    },
    inProgress: {
        type: mongoose.Mixed,
        required: true
    },
    bio: {
        type: String
    },
    profilePic: {
        type: String
    },
    completed: {
        type: mongoose.Mixed
    },
    posted: {
        type: mongoose.Mixed
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;