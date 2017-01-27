'use strict';

const bot = require('../core/telegram');
const Ban = require('../models/banmodel');

bot.on('message', msg => {
    Ban.count({
        userid: msg.from.id
    }, (err, count) => {
        if (count > 0) {
            bot.kickChatMember(msg.chat.id, msg.from.id);
            bot.sendMessage(msg.chat.id, `*${msg.from.first_name}* Is Globally Banned!`, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown'});
        } else {
            // Some Random User Talking
        }
    });
});
