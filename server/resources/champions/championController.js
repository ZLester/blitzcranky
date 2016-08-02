const Champion = require('./Champion');
const { seedChampions } = require('./championUtils');

exports.retrieve = (req, res) => {
  Champion.retrieve()
    .then(champions => res.json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.update = (req, res) => {
  seedChampions()
    .then(() => Champion.retrieve())
    .then(champions => res.status(201).json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};
