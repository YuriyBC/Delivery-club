const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const dbConfig = require('./config/db.config');
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

app.post('/api/auth/signup', async (req, res) => {
  if (await db.user.findOne({ username: req.body.username })) {
    throw 'Username "' + req.body.username + '" is already taken';
  }

  const user = new db.user(req.body);

  user.save();
  console.log(user, req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
