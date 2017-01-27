'use strict';

const bot = require('../core/telegram');
const Ban = require('../models/banmodel');
const Mod = require('../models/modsmodel');
const config = require('../core/config');
const moment = require('moment');
const fs = require('fs');

bot.onText(/^[\/!#]banlist$/, msg => {
    Mod.count({
        userid: msg.from.id
    }, (err, count) => {
        if (count > 0) {
            let query = Ban.find({}).select({
                'userid': 1,
                'name': 1,
                '_id': 0
            });
            const arr = [];
            query.exec((err, results) => {
                if (err) throw err;
                results.forEach(result => {
                    arr.push(result.name);
                    arr.push(result.userid);
                });
                let fixed = arr.join('\n');
                fs.writeFile('banlist.txt', fixed, (err) => {
                    if (err) throw err;
                    bot.sendDocument(config.LOG_CHANNEL, `banlist.txt`, {caption: `Generated On ${moment().format('MMMM Do YYYY, h:mm:ss a')}`});
                });
            });
        } else {
            bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not A Global Admin!`, {parse_mode: 'Markdown'});
        }
    });
});

bot.onText(/^[\/!#]globaladmins$/, msg => {
     let query = Mod.find({}).select({
        'userid': 1,
        'name': 1,
        '_id': 0
     });
     const arr = [];
     query.exec((err, results) => {
        if (err) throw err;
            results.forEach(result => {
            arr.push(result.name);
            arr.push(result.userid);
            });
    let fixed = arr.join('\n');
        bot.sendMessage(msg.chat.id, `*Global Admins*\n\n${fixed}`, {parse_mode: 'Markdown'});
    });
});
