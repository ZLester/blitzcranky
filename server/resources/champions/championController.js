const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));

const championStore = {
  champions: [],
};

exports.retrieve = (req, res) => {
  res.json(championStore.champions);
};

exports.update = (req, res) => {
  request.getAsync(`https://blitzcranky-champion.herokuapp.com`)
    .then(response => JSON.parse(response.body))
    .then(champions => {
      championStore.champions = champions;
      res.status(201).json(champions);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};
