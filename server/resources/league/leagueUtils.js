const League = require('./League');

exports.addImageUrls = champion => {
  return Object.assign(
    champion,
    League.retrieveChampionPicsByName(champion.name)
  );
};

exports.pluckIds = champion => champion.id;
