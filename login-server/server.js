require('dotenv').config()
const mongoose = require('mongoose');
const app = require('./app');
// TODO: get this values through env vars
const port = process.env.PORT || 3300;
const uri = process.env.MONGO_DB_URI;

Promise
  .resolve(mongoose.connect(uri))
  .then(() => {
    console.log('DB connected');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
