const bluebird = require('bluebird');
const redis = require('redis');
bluebird.promisifyAll(redis.RedisClient.prototype);
const { REDIS_URL } = require('../config');

const db = redis.createClient(REDIS_URL);

module.exports = db;
