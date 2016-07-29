const League = require('./League');
const Champion = require('../champions/Champion');
const { addImageUrls, getChampionColors } = require('./leagueUtils.js');

exports.retrieveChampions = (req, res) => {
  Champion.remove({})
    .then(() => League.retrieveFreeChampions())
    .then(freeChampions => {
      return freeChampions
        .map(freeChampion => League.retrieveChampionById(freeChampion.id));
    })
    .then(championRequests => Promise.all(championRequests))
    .then(champions => champions.map(addImageUrls))
    .then(champions => {
      const colorRequests = champions.map(champion => getChampionColors(champion));
      return Promise.all(colorRequests)
        .then(colorsList => colorsList.map((colors, index) => Object.assign({}, champions[index], { colors })));
    })
    .then(champions => Champion.create(champions))
    .then(champions => res.json(champions))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err.message })
    });
};
