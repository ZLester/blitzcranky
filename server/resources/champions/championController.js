const Champion = require('./Champion');
const logger = require('winston');
const { seedChampions } = require('./championUtils');

exports.retrieve = (req, res) => {
  Champion.retrieve()
    .then(raw => JSON.parse(raw))
    .then(champions => res.json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.update = (req, res) => {
  Champion.delete()
    .then(() => seedChampions())
    .then(champions => Promise.all([champions, Champion.create(champions)]))
    .spread(champions => res.status(201).json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};

Champion.delete()
  .then(() => seedChampions())
  .then(champions => Champion.create(champions))
  .then(champions => logger.info(champions))
  .then(() => logger.info('Champions seeded.'))
  .catch(() => logger.error('Error seeding champions.'));
