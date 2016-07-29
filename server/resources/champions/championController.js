const Champion = require('./Champion');

exports.createOne = (req, res) => {
  const newChampion = req.body;
  Champion.create(newChampion)
    .then(champion => res.json(champion))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.retrieve = (req, res) => {
  const query = req.query;
  Champion.find(query)
    .then(champions => res.json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.retrieveOne = (req, res) => {
  const id = req.params.id;
  Champion.findById(id)
    .then(champion => res.json(champion))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.updateOne = (req, res) => {
  const id = req.params.id;
  const updatedProps = req.body;
  const options = { upsert: true };
  Champion.findByIdAndUpdate(id, updatedProps, options)
    .then(champion => res.json(champion))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.delete = (req, res) => {
  const query = req.query;
  Champion.find(query)
    .then(champions => Promise.all([champions, Champion.remove(query)]))
    .spread(champions => res.json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.deleteOne = (req, res) => {
  const id = req.params.id;
  Champion.findByIdAndRemove(id)
    .then(champion => res.json(champion))
    .catch(err => res.status(500).json({ error: err.message }));
};
