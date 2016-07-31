const championRouter = require('express').Router();
const championController = require('./championController');

championRouter.route('/')
  .get(championController.retrieve)
  .put(championController.update);

module.exports = championRouter;
