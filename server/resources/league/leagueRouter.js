const leagueRouter = require('express').Router();
const leagueController = require('./leagueController');

leagueRouter.route('/champions')
  .get(leagueController.retrieveChampions);

module.exports = leagueRouter;
