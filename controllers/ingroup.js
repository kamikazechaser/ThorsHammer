const bot = require('../core/telegram');

bot.onText(/^[\/!#]kick$/, msg => {
    bot.getChatAdministrators(msg.chat.id).then(admins => admins.some(child => child.user.id == msg.from.id)).then(isAdmin => {
        if (isAdmin) {
            bot.kickChatMember(msg.chat.id, msg.reply_to_message.from.id);
            bot.unbanChatMember(msg.chat.id, msg.reply_to_message.from.id);
            bot.sendMessage(msg.chat.id, `*${msg.reply_to_message.from.first_name}*, Kicked From This Group!`, {parse_mode: 'Markdown'});
        } else {
            bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not An Administrator In This Group!`, {parse_mode: 'Markdown'});
        }
    });
});

bot.onText(/^[\/!#]ban$/, msg => {
    bot.getChatAdministrators(msg.chat.id).then(admins => admins.some(child => child.user.id == msg.from.id)).then(isAdmin => {
        if (isAdmin) {
            bot.kickChatMember(msg.chat.id, msg.reply_to_message.from.id);
            bot.sendMessage(msg.chat.id, `*${msg.reply_to_message.from.first_name}*, Banned From This Group!`, {parse_mode: 'Markdown'});
        } else {
            bot.sendMessage(msg.chat.id, `*${msg.from.first_name}*, You Are Not An Administrator In This Group!`, {parse_mode: 'Markdown'});
        }
    });
});

bot.onText(/^[\/!#]admins$/, msg => {
    bot.getChatAdministrators(msg.chat.id).then(admins => {
        let chatAdmins = admins.map(admin => admin.user.first_name).join('\n');
        bot.sendMessage(msg.chat.id, `*Group Admins*\n\n${chatAdmins}\n\nTo See Global Admins Use The _!globaladmins_ Command`, {parse_mode: 'Markdown'});
    });
});