const League = require('./League');

exports.addImageUrls = champion => {
  return Object.assign(
    champion,
    League.retrieveChampionPicsByKey(champion.key)
  );
};
