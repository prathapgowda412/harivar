const express = require('express');
const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const getData = require('../controller/getData');

module.exports = function (app) {
  app.use(cors(corsOptions));
  app.get('/getdata', getData);
};
