const League = require('./League');
const { addImageUrls } = require('./leagueUtils.js');

exports.retrieveChampions = (req, res) => {
  League.retrieveFreeChampions()
    .then(freeChampions => {
      return freeChampions
        .map(freeChampion => League.retrieveChampionById(freeChampion.id));
    })
    .then(championRequests => Promise.all(championRequests))
    .then(champions => champions.map(addImageUrls))
    .then(champions => res.json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};
