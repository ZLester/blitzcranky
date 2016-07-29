const CronJob = require('cron').CronJob;
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));

const updateChampions = () => {
  request.putAsync('https://blitzcranky.herokuapp.com/api/champions')
    .then(() => {
      console.log('Updated Champions');
    })
    .catch(err => {
      console.log(`Error: ${err.message}`);
      setTimeout(updateChampions, 60000)
    });
}

const updateChampionsDaily = new CronJob({
  cronTime: '00 00 09 * * 0-6',
  onTick: () => {
    updateChampions();
  },
  start: true,
  timeZone: 'America/Los_Angeles'
});

module.exports = updateChampionsDaily;
