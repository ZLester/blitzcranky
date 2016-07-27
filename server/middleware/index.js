const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../../build')));
};
