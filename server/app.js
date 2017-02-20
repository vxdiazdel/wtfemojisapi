const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const routes = require('./routes');
const dbConfig = require('./db/config');

// Connect to DB
mongoose.connect(dbConfig.url, () => {
  console.log(`Connected to ${dbConfig.url}`);
});

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/wtf', routes);

module.exports = app;
