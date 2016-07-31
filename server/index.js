const logger = require('winston');
const cluster = require('cluster');
const { MAX_WORKERS } = require('./config');

if (cluster.isMaster) {
  for (let i = 0; i < MAX_WORKERS; i++) {
    cluster.fork();
  }

  cluster.on('online', worker => {
    logger.info(`Blitzcranky Static Server ${worker.id} started.`);
  });

  cluster.on('exit', (worker, code) => {
    logger.warn(`Blitzcranky Static Server ${worker.id} died with code ${code}.`);
    cluster.fork();
  });
} else {
  const app = require('./server');
  const { PORT } = require('./config');

  app.listen(PORT, () => {
    logger.info(`Blitzcranky Static Server Worker ${cluster.worker.id} listening on port ${PORT}`);
  });
}
