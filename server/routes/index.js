const leagueRouter = require('../resources/league/leagueRouter');

module.exports = app => {
  app.use('/api/league', leagueRouter);
};
