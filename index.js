const express = require('express');
const app = express();

const config = require('./config.js');

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.get('/', (req, res) => {
  res.send("Welcome to home page");
});

app.listen(config.port, () => {
  console.log('Server is running on http://localhost:3000 or ', config.port);
});
