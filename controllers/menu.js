const bot = require('../core/telegram');

bot.onText(/^[\/!#]start$/, msg => {
    bot.sendMessage(msg.from.id, 'https://github.com/kamikazechaser/ThorsHammer');
});
