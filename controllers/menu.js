const bot = require('../core/telegram');

bot.onText(/^[\/!#]start$/, msg => {
    bot.sendMessage(msg.chat.id, `*Hello There!*`, {parse_mode: 'Markdown'});
});
