const Champion = require('./Champion');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const logger = require('winston');
const { CHAMPIONS_URI } = require('../../config');

exports.seedChampions = () => (
  Champion.delete()
    .then(() => request.getAsync(CHAMPIONS_URI))
    .then(response => JSON.parse(response.body))
    .then(champions => Champion.create(champions))
);

exports.seedChampions()
  .then(() => Champion.retrieve())
  .then(() => logger.info('Champions seeded successfully.'))
  .catch(err => logger.error(`Error seeding champions: ${err.message}`));
