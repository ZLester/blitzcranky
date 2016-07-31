const db = require('../../db');

class Champion {
  create(champions) {
    return db.setAsync('champions', JSON.stringify(champions));
  }
  retrieve() {
    return db.getAsync('champions')
      .then(raw => JSON.parse(raw));
  }
  delete() {
    return db.delAsync('champions');
  }
}

module.exports = new Champion();
