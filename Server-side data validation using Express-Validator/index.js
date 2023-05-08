const express = require('express');
const connectDatabase = require('./databaseConfig');
const router = require('./routes/user');
const colors = require('colors');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',router);

app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});



app.listen(port, () => {
  console.log(`> Server is up and running on : http://localhost: ${port} `.green.bgWhite);
  connectDatabase();
});
