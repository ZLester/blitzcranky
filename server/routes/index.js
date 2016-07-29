const leagueRouter = require('../resources/league/leagueRouter');
const championRouter = require('../resources/champions/championRouter');

module.exports = app => {
  app.use('/api/league', leagueRouter);
  app.use('/api/champions', championRouter);
};
