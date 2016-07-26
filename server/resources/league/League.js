const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const key = 'RGAPI-E06DE46F-0D5B-4B69-8FE4-753443B743DB';

class League {
  constructor(api_key) {
    this.api_key = process.env.LEAGUE_API_KEY || api_key;
  }
  retrieveChampionIconByName(name) {
    return `https://ddragon.leagueoflegends.com/cdn/6.15.1/img/champion/${name}.png`;
  }
  retrieveChampionBackgroundByName(name) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;
  }
  retrieveChampionPicsByName(name) {
    return {
      icon: this.retrieveChampionIconByName(name),
      background: this.retrieveChampionBackgroundByName(name),
    };
  }
  retrieveChampionById(id) {
    return request
      .getAsync(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/${id}?champData=blurb,info,lore,tags&api_key=${this.api_key}`)
      .then(response => JSON.parse(response.body));
  }
  retrieveFreeChampions() {
    return request
      .getAsync(`https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=true&api_key=${this.api_key}`)
      .then(response => JSON.parse(response.body))
      .then(data => data.champions);
  }
}

module.exports = new League(key);
