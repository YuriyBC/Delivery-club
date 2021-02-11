const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const dbConfig = require('./config/db.config');
const auth = require('./auth');
const passport = require('passport');
require('./config/passport');

const app = express();
const port = 3000;

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

app.post('/api/auth/signup', auth.optional, async (req, res) => {
  const userData = req.body;

  if(!userData.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!userData.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const user = new db.user(userData);
  user.setPassword(userData.password);

  return user.save()
    .then(() => res.json({ user: user.toAuthJSON() }));
});


app.post('/api/auth/login', auth.optional, (req, res, next) => {
  const userData = req.body;

  if(!userData.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!userData.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if (info) {
      return res.status(500).send(info.message);
    }

    if (err) {
      return res.status(500).send(err);
    }

    if (passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return res.status(400).info;
  })(req, res, next);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
