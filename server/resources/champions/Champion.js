const db = require('../../db');
const Promise = require('bluebird');

class Champion {
  create(champions) {
    return Promise.all(
      champions.map(champion =>
        db.lpushAsync('champions', JSON.stringify(champion)))
    );
  }
  retrieve() {
    return db.lrangeAsync('champions', 0, 9)
      .then(champions => champions.map(JSON.parse));
  }
  delete() {
    return this.retrieve()
      .then(champions => Promise.all([champions, db.ltrimAsync('champions', 1, 0)]))
      .spread(champions => champions);
  }
}

module.exports = new Champion();
