const db = require('../../db');

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
    return db.ltrimAsync('champions', 1, 0);
  }
}

module.exports = new Champion();
