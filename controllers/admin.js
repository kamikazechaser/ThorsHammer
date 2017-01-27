const moment = require('moment');
const bot = require('../core/telegram');
const config = require('../core/config');
const Mod = require('../models/modsmodel');

bot.onText(/^[\/!#]leave$/, msg => {
    if (msg.from.id == config.SUDO) {
        bot.leaveChat(msg.chat.id);
    } else {
        bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not The Super User!`, {parse_mode: 'Markdown'});
    }
});

bot.onText(/^[\/!#]promote$/, msg => {
    if (msg.from.id == config.SUDO) {
        let newMod = new Mod({
            userid: msg.reply_to_message.from.id,
            name: msg.reply_to_message.from.first_name
        });
        newMod.save(err => {
            if (err && err.code === 11000) {
                bot.sendMessage(msg.chat.id, `*${msg.reply_to_message.from.first_name}*, Is Already A Global Admin`, {parse_mode: 'Markdown'});
            } else {
                bot.sendMessage(msg.chat.id, `*${msg.reply_to_message.from.first_name}*, Promoted To A Global Admin!`, {parse_mode: 'Markdown'});
                bot.sendMessage(config.LOG_CHANNEL, `*${msg.reply_to_message.from.first_name}*, Is Now A Global Admin!\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {parse_mode: 'Markdown'});
            }
        });
    } else {
        bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not A Global Admin!`, {parse_mode: 'Markdown'});
    }
});

bot.onText(/^[\/!#]demote$/, msg => {
    if (msg.from.id == config.SUDO) {
        Mod.remove({
            userid: msg.reply_to_message.from.id
        }, () => {
            // Demote A Global Admin
        });
        bot.sendMessage(msg.chat.id, `*${msg.reply_to_message.from.first_name}*, Demoted!`, {parse_mode: 'Markdown'});
        bot.sendMessage(config.LOG_CHANNEL, `*${msg.reply_to_message.from.first_name}*, Is No Longer A Global Admin!\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {parse_mode: 'Markdown'});
    } else {
        bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not A Global Admin!`, {parse_mode: 'Markdown'});
    }
});

bot.onText(/[\/!#]promote (\d+) (.+)/, (msg, match) => {
    if (msg.from.id == config.SUDO) {
        let newMod = new Mod({
            userid: match[1],
            name: match[2]
        });
        newMod.save(err => {
            if (err && err.code === 11000) {
                bot.sendMessage(msg.chat.id, `*${match[2]}*, Is Already A Global Admin`, {parse_mode: 'Markdown'});
            } else {
                bot.sendMessage(msg.chat.id, `*${match[2]}*, Promoted To A Global Admin!`, {parse_mode: 'Markdown'});
                bot.sendMessage(config.LOG_CHANNEL, `*${match[2]}* _(${match[1]})_, Is Now A Global Admin!\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {parse_mode: 'Markdown'});
            }
        });
    } else {
        bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not A Global Admin!`, {parse_mode: 'Markdown'});
    }
});

bot.onText(/[\/!#]demote (\d+) (.+)/, (msg, match) => {
    if (msg.from.id == config.SUDO) {
        Mod.remove({
            userid: match[1]
        }, () => {
            // Demote A Global Admin
        });
        bot.sendMessage(msg.chat.id, `*${match[2]}*, Demoted!`, {parse_mode: 'Markdown'});
        bot.sendMessage(config.LOG_CHANNEL, `*${match[2]}* _(${match[1]})_, Is No Longer A Global Admin!\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {parse_mode: 'Markdown'});
    } else {
        bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not A Global Admin!`, {parse_mode: 'Markdown'});
    }
});