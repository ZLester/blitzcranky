const championRouter = require('express').Router();
const championController = require('./championController');

championRouter.route('/')
  .post(championController.createOne)
  .get(championController.retrieve)
  .delete(championController.delete);

championRouter.route('/:id')
  .get(championController.retrieveOne)
  .put(championController.updateOne)
  .delete(championController.deleteOne);

module.exports = pokemonRouter;
