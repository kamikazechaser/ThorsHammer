'use strict';

const Tg = require('node-telegram-bot-api');
const config = require('./config');
const moment = require('moment');
const rangi = require('rangi');
const ngrok = require('ngrok');

let ngrokTunnel;

const tunnelIt = () => {
    ngrok.connect({
        addr: 8443,
        region: 'eu'
    }, (err, url) => {
        ngrokTunnel = url;
        console.log(rangi.magenta(`Tunnel Connected At ${url}`))
        bot.setWebHook(`${ngrokTunnel}/bot${config.BOT_TOKEN}`);
    });
}

tunnelIt();

const bot = new Tg(config.BOT_TOKEN, {
    webHook: {
        host: ngrokTunnel,
        port: 8443
    },
    onlyFirstMatch: true
});

bot.getMe().then(me => {
    console.log(rangi.cyan(`Bot Is Running => ${me.username}`));
    bot.sendMessage(config.SUDO, `Bot Started!\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {
        parse_mode: 'Markdown'
    });
});

module.exports = bot;