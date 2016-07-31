const Champion = require('./Champion');
const logger = require('winston');
const { seedChampions } = require('./championUtils');

exports.retrieve = (req, res) => {
  Champion.retrieve()
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

// Retrieve Champions from Champion Service and seed Redis DB
Champion.delete()
  .then(() => seedChampions())
  .then(champions => Champion.create(champions))
  .then(() => logger.info('Champions seeded successfully.'))
  .catch(() => logger.error('Error seeding champions.'));
