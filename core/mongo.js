'use strict';

const mongoose = require('mongoose');
const rangi = require('rangi');
const config = require('./config');
const cron = require('node-cron');
const Ban = require('../models/banmodel');

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(rangi.green('Connected To MongoDB'));
});

module.exports = db;

cron.schedule('* 3 * * *', () => {
    const sync = mongoose.createConnection('mongodb://sync:sync@ds029665.mlab.com:29665/banhammer');
    const remoteList = sync.model('Ban');
    remoteList.find({}, (err, docs) => {
        Ban.collection.insert(docs, status)
    })

    function status(err, result) {
        if (err && err.code == 11000) {
            console.log(rangi.red(`Err`));
        } else {
            console.info(rangi.magenta(`Sync Successful!`));
        }
    }
});
