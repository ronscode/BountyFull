const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session')

// Initialize App
const app = express();
const PORT = process.env.PORT || 3001;

// DB Setup
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express Session
app.use(session({
    secret: 'secretbountymessage',
    resave: true,
    saveUninitialized: true
}))

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/users', require('./routes/users')) // Register, Login, Logout User
app.use('/find', require('./routes/find')) // Find new litter bounties
app.use('/list', require('./routes/list')) // List new litter bounties

app.listen(PORT, () => console.log(`Serer started on port ${PORT}`))