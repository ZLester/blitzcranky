module.exports = {
  PORT: process.env.PORT || 3000,
  REDIS_URL: process.env.REDIS_URL || null,
  MAX_WORKERS: process.env.WEB_CONCURRENCY || require('os').cpus().length,
  CHAMPIONS_URI: process.env.CHAMPIONS_URI || 'http://localhost:3001/api/champions',
};
