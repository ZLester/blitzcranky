const logger = require('winston');
const cluster = require('cluster');

if (cluster.isMaster) {
  const cpus = require('os').cpus();
  cpus.forEach(cpu => {
    cluster.fork();
  });

  cluster.on('online', worker => {
    logger.info(`Worker ${worker.id} started.`);
  });

  cluster.on('exit', (worker, code) => {
    logger.warn(`Worker ${worker.id} died with code ${code}. Restarting new worker.`);
    cluster.fork();
  });
} else {
  const app = require('./server');
  const { PORT } = require('./config');

  app.listen(PORT, () => {
    logger.info(`Blitzcranky Static Server Worker ${cluster.worker.id} listening on port ${PORT}`);
  });
}
