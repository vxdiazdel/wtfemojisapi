const express = require('express');
const routes = express();

const mainController = require('./controllers/mainController');

routes.get('/', mainController.getEmojis);
routes.get('/emoji/:query', mainController.getEmoji);
routes.get('/random', mainController.getRandomEmoji);

module.exports = routes;
