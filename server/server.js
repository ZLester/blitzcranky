const express = require('express');
const app = express();

require('./routes')(app);
require('./middleware')(app, express);

module.exports = app;
