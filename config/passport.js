const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Models
const User = require('../models/User');

module.exports = ( passport ) => {
    passport.use(
        new LocalStrategy({ username: 'email' }, (email, password, done) => {
            User.findOne({email: email})
                .then(user => {

                    // For no user found
                    if(!user){
                        return done(null, false, { msg: 'That email is not registered' });
                    }

                    // On match, compare passwords
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err){throw err;}
                        if(isMatch) {
                            return done(null, user);
                        } else{
                            return done(null, false, {msg: 'Incorrect password'});
                        }
                    })
                })
                .catch(err => console.log(err))
        })
    );

    // Store user in session
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    // Remove user from session
    passport.deserializeUser((id, done) => {
        User.findByID(id, (err, user) => {
            done(err, user)
        });
    });
}