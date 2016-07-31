const client = require('../../db');

class Champion {
  create(champions) {
    return client.setAsync('champions', JSON.stringify(champions));
  }
  retrieve() {
    return client.getAsync('champions');
  }
  delete() {
    return client.delAsync('champions');
  }
}

module.exports = new Champion();
