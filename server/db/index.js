const bluebird = require('bluebird');
const redis = require('redis');
bluebird.promisifyAll(redis.RedisClient.prototype);
const { REDIS_URL } = require('../config');
const client = redis.createClient(REDIS_URL);

module.exports = client;
