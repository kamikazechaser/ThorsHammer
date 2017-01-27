'use strict';

const moment = require('moment');
const bot = require('../core/telegram');
const config = require('../core/config');
const Ban = require('../models/banmodel');
const Mod = require('../models/modsmodel');

bot.onText(/^[\/!#]hammer$/, msg => {
    Mod.count({
        userid: msg.from.id
    }, (err, count) => {
        if (count > 0 || config.SUDO == msg.from.id) {
            bot.kickChatMember(msg.chat.id, msg.reply_to_message.from.id);
            let newBan = new Ban({
                userid: msg.reply_to_message.from.id,
                name: msg.reply_to_message.from.first_name,
            });
            newBan.save(err => {
                if (err && err.code === 11000) {
                    bot.sendMessage(msg.chat.id, `*${msg.reply_to_message.from.first_name}*, Is Already Globally Banned!`, {parse_mode: 'Markdown'});
                } else {
                    bot.sendMessage(msg.chat.id, `*${msg.reply_to_message.from.first_name}*, Globally Banned!`, {parse_mode: 'Markdown'});
                    bot.sendMessage(config.LOG_CHANNEL, `*${msg.reply_to_message.from.first_name}*, Globally Banned!\nBy: _${msg.from.first_name}_\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {parse_mode: 'Markdown'});
                }
            });
        } else {
            bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not A Global Admin!`, {parse_mode: 'Markdown'});
        }
    });
});

bot.onText(/^[\/!#]unhammer$/, msg => {
    Mod.count({
        userid: msg.from.id
    }, (err, count) => {
        if (count > 0 || config.SUDO == msg.from.id) {
            bot.unbanChatMember(msg.chat.id, msg.reply_to_message.from.id);
            Ban.remove({
                userid: msg.reply_to_message.from.id
            }, () => {
                // Globally Unhammered
            });
            bot.sendMessage(msg.chat.id, `*${msg.reply_to_message.from.first_name}*, Globally Unbanned!`, {parse_mode: 'Markdown'});
            bot.sendMessage(config.LOG_CHANNEL, `*${msg.reply_to_message.from.first_name}*, Globally Unbanned!\nBy: _${msg.from.first_name}_\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {parse_mode: 'Markdown'});
        } else {
            bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not A Global Admin!`, {parse_mode: 'Markdown'});
        }
    });
});

bot.onText(/[\/!#]hammer (\d+) (.+)/, (msg, match) => {
    Mod.count({
        userid: msg.from.id
    }, (err, count) => {
        if (count > 0 || config.SUDO == msg.from.id) {
            let newBan = new Ban({
                userid: match[1],
                name: match[2],
            });
            newBan.save(err => {
                if (err && err.code === 11000) {
                    bot.sendMessage(msg.chat.id, `*${match[2]}*, Is Already Globally Banned!`, {parse_mode: 'Markdown'});
                } else {
                    bot.sendMessage(msg.chat.id, `*${match[2]}*, Globally Banned!`, {parse_mode: 'Markdown'});
                    bot.sendMessage(config.LOG_CHANNEL, `*${match[2]}* _(${match[1]})_, Globally Banned!\nBy: _${msg.from.first_name}_\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {parse_mode: 'Markdown'});
                }
            });
        } else {
            bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not A Global Admin!`, {parse_mode: 'Markdown'});
        }
    });
})

bot.onText(/[\/!#]unhammer (\d+) (.+)/, (msg, match) => {
    Mod.count({
        userid: msg.from.id
    }, (err, count) => {
        if (count > 0 || config.SUDO == msg.from.id) {
            Ban.remove({
                userid: match[1]
            }, (err, cb) => {
                if (cb.result.n == 0) {
                    console.log('User Not Found!')
                }
            });
            bot.sendMessage(msg.chat.id, `*${match[2]}*, Globally Unbanned!`, {parse_mode: 'Markdown'});
            bot.sendMessage(config.LOG_CHANNEL, `*${match[2]}* _(${match[1]})_, Globally Unbanned!\nBy: _${msg.from.first_name}_\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {parse_mode: 'Markdown'});
        } else {
            bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not A Global Admin!`, {parse_mode: 'Markdown'});
        }
    });
});