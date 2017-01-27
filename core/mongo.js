'use strict';

const mongoose = require('mongoose');
const rangi = require('rangi');
const config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
    console.log(rangi.green('Connected To MongoDB'));
});

module.exports = db;