const passport = require('passport');
const LocalStrategy = require('passport-local');
const db = require('../models');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  db.user.findOne({ email })
    .then((user) => {
      if(!user || !user.validatePassword(password)) {
        return done(null, false, { message: 'email or password are invalid' });
      }

      return done(null, user);
    }).catch(done);
}));
