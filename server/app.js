const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const app = express();
const port = 3000;

const db = require("./models");
const dbConfig = require('./db.config');

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.use(bodyParser.json());

app.post('/api/auth/signup', async (req, res) => {
  if (await db.user.findOne({ username: req.body.username })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  const user = new db.user(req.body);

  user.save();
  console.log(user, req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  db.user.findOne({ email })
    .then((user) => {
      if(!user) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }

      return done(null, user);
    }).catch(done);
}));


