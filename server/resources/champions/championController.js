const Champion = require('./Champion');
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
