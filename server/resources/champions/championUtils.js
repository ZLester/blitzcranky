const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));

exports.seedChampions = () => (
  request.getAsync(`https://blitzcranky-champion.herokuapp.com/api/champions`)
    .then(response => JSON.parse(response.body))
);
