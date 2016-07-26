const League = require('./League');
const { pluckIds, addImageUrls } = require('./leagueUtils.js');

exports.retrieveChampions = (req, res) => {
  League.retrieveFreeChampions()
    .then(champions => champions.map(pluckIds))
    .then(ids => ids.map(id => League.retrieveChampionById(id)))
    .then(championRequests => Promise.all(championRequests))
    .then(champions => champions.map(addImageUrls))
    .then(champions => res.json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};
