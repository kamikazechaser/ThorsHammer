const bot = require('../core/telegram');
const Ban = require('../models/banmodel');

bot.on('new_chat_participant', msg => {
    Ban.count({
        userid: msg.new_chat_participant.id
    }, (err, count) => {
        if (count > 0) {
            bot.kickChatMember(msg.chat.id, msg.new_chat_participant.id);
            bot.sendMessage(msg.chat.id, `${msg.new_chat_participant.first_name} Is Globally Banned!`, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown'});
        }
    });
});

bot.on('new_chat_participant', msg => {
    bot.getMe().then(me => {
        if (msg.new_chat_participant.username == me.username) {
            bot.sendMessage(msg.chat.id, `Hello There! I Am A Group Administartion Bot, Hit The Button Below To Learn More About Me`, {reply_markup: {inline_keyboard: [[{ text: 'Start Me', url: 'http://t.me/ThorsHammerBot'}]]}});
        }
    });
});
