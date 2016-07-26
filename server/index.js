const app = require('./server');
const port = 300;

app.listen(port, () => {
  console.log(`Blitzcranky listening on port ${port}`);
});