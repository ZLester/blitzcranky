const app = require('./server');
const { PORT } = require('./config');

app.listen(PORT, () => {
  console.log(`Blitzcranky listening on port ${PORT}`);
});