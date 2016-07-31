const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const logger = require('winston');

const championStore = {
  champions: [],
};

const seedChampions = () => {
  return request.getAsync(`https://blitzcranky-champion.herokuapp.com/api/champions`)
    .then(response => JSON.parse(response.body))
    .then(champions => {
      championStore.champions = champions;
      return champions;
    });
};

exports.retrieve = (req, res) => {
  res.json(championStore.champions);
};

exports.update = (req, res) => {
  seedChampions()
    .then(champions => res.status(201).json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};

seedChampions()
  .then(() => logger.info('Champions seeded.'))
  .catch(() => logger.error('Error seeding champions.'));
