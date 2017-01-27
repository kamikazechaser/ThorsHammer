'use strict';

const bot = require('../core/telegram');
const emoji = require('node-emoji')
const locale = require('../locale.json');

const startKeyboard = [[{
    text: `🇬🇧 English`,
    callback_data: `start_en`
}, {
    text: `🇪🇸 Español`,
    callback_data: `start_es`
}], [{
    text: `🇧🇷 Português`,
    callback_data: `start_pt`
}, {
    text: `فارسی 🇮🇷`,
    callback_data: `start_fa`
}], [{
    text: `الرئيسية 🇸🇦`,
    callback_data: `start_ar`
}, {
    text: `🇮🇹 Italiano`,
    callback_data: `start_it`
}]]

const helpKeyboard = [[{
    text: `🇬🇧 English`,
    callback_data: `help_en`
}, {
    text: `🇪🇸 Español`,
    callback_data: `help_es`
}], [{
    text: `🇧🇷 Português`,
    callback_data: `help_pt`
}, {
    text: `فارسی 🇮🇷`,
    callback_data: `help_fa`
}], [{
    text: `الرئيسية 🇸🇦`,
    callback_data: `help_ar`
}, {
    text: `🇮🇹 Italiano`,
    callback_data: `help_it`
}]]

const backKeyboard = [[{
    text: `🔙`,
    callback_data: `recycle_start`
}]]

bot.onText(/^[\/!#]start$/, msg => {
    bot.sendMessage(msg.from.id, `*Select language:*`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: startKeyboard
        }
    });
});

bot.on('callback_query', msg => {
    let langCode = msg.data.slice(6);
    let lang = msg.data.slice(6);
    if (lang == `en`) {
        lang = locale.en
    }
    if (lang == `es`) {
        lang = locale.es
    }
    if (lang == `pt`) {
        lang = locale.pt
    }
    if (lang == `fa`) {
        lang = locale.fa
    }
    if (lang == `en`) {
        lang = locale.ar
    }
    if (lang == `es`) {
        lang = locale.it
    }    
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `start_${langCode}`) {
        bot.editMessageText(`${lang.start}`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: backKeyboard
            }
        })
    }
});

bot.onText(/^[\/!#]help$/, msg => {
    bot.sendMessage(msg.from.id, `*Select language:*`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: helpKeyboard
        }
    });
});

bot.on('callback_query', msg => {
    let langCode = msg.data.slice(5);
    let lang = msg.data.slice(5);
    if (lang == `en`) {
        lang = locale.en
    }
    if (lang == `es`) {
        lang = locale.es
    }
    if (lang == `pt`) {
        lang = locale.pt
    }
    if (lang == `fa`) {
        lang = locale.fa
    }
    if (lang == `en`) {
        lang = locale.ar
    }
    if (lang == `es`) {
        lang = locale.it
    }     
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `help_${langCode}`) {
        bot.editMessageText(`${lang.help}`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: [[{
                    text: `🔨 ${lang.banhammer_help}`,
                    callback_data: `banhammer_help_${langCode}`
                }, {
                    text: `🔰 ${lang.superuser_help}`,
                    callback_data: `superuser_help_${langCode}`
                }], [{
                    text: `🛃 ${lang.globaladmin_help}`,
                    callback_data: `globaladmin_help_${langCode}`
                }, {
                    text: `👥 ${lang.ingroup_help}`,
                    callback_data: `ingroup_help_${langCode}`
                }], [{
                    text: `ℹ️️ ${lang.about_help}`,
                    callback_data: `about_help_${langCode}`
                }, {
                    text: `👍 ${lang.credits_help}`,
                    callback_data: `credits_help_${langCode}`
                }], [{
                    text: `🔙`,
                    callback_data: `recycle_help`
                }]]
            }
        })
    }
});

bot.on('callback_query', msg => {
    let langCode = msg.data.slice(15);
    let lang = msg.data.slice(15);
    if (lang == `en`) {
        lang = locale.en
    }
    if (lang == `es`) {
        lang = locale.es
    }
    if (lang == `pt`) {
        lang = locale.pt
    }
    if (lang == `fa`) {
        lang = locale.fa
    }
    if (lang == `en`) {
        lang = locale.ar
    }
    if (lang == `es`) {
        lang = locale.it
    }
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `banhammer_help_${langCode}`) {
        bot.editMessageText(`${lang.banhammerinfo}`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: [[{
                    text: `🔙`,
                    callback_data: `recycle_help_${langCode}`
                }]]
            }
        })
    }
    if (msg.data == `superuser_help_${langCode}`) {
        bot.editMessageText(`${lang.superuserinfo}`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: [[{
                    text: `🔙`,
                    callback_data: `recycle_help_${langCode}`
                }]]
            }
        })
    }    
});

bot.on('callback_query', msg => {
    let langCode = msg.data.slice(17);
    let lang = msg.data.slice(17);
    if (lang == `en`) {
        lang = locale.en
    }
    if (lang == `es`) {
        lang = locale.es
    }
    if (lang == `pt`) {
        lang = locale.pt
    }
    if (lang == `fa`) {
        lang = locale.fa
    }
    if (lang == `en`) {
        lang = locale.ar
    }
    if (lang == `es`) {
        lang = locale.it
    }
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `globaladmin_help_${langCode}`) {
        bot.editMessageText(`${lang.globaladmininfo}`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: [[{
                    text: `🔙`,
                    callback_data: `recycle_help_${langCode}`
                }]]
            }
        })
    }    
});

bot.on('callback_query', msg => {
    let langCode = msg.data.slice(13);
    let lang = msg.data.slice(13);
    if (lang == `en`) {
        lang = locale.en
    }
    if (lang == `es`) {
        lang = locale.es
    }
    if (lang == `pt`) {
        lang = locale.pt
    }
    if (lang == `fa`) {
        lang = locale.fa
    }
    if (lang == `en`) {
        lang = locale.ar
    }
    if (lang == `es`) {
        lang = locale.it
    }
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `ingroup_help_${langCode}`) {
        bot.editMessageText(`${lang.ingroupinfo}`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: [[{
                    text: `🔙`,
                    callback_data: `recycle_help_${langCode}`
                }]]
            }
        })
    }
    if (msg.data == `credits_help_${langCode}`) {
        bot.editMessageText(`${lang.creditsinfo}`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: [[{
                    text: `🔙`,
                    callback_data: `recycle_help_${langCode}`
                }]]
            }
        })
    }
});

bot.on('callback_query', msg => {
    let langCode = msg.data.slice(11);
    let lang = msg.data.slice(11);
    if (lang == `en`) {
        lang = locale.en
    }
    if (lang == `es`) {
        lang = locale.es
    }
    if (lang == `pt`) {
        lang = locale.pt
    }
    if (lang == `fa`) {
        lang = locale.fa
    }
    if (lang == `en`) {
        lang = locale.ar
    }
    if (lang == `es`) {
        lang = locale.it
    }
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `about_help_${langCode}`) {
        bot.editMessageText(`${lang.aboutinfo}`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: [[{
                    text: `🔙`,
                    callback_data: `recycle_help_${langCode}`
                }]]
            }
        })
    }   
});

bot.on('callback_query', msg => {
    let langCode = msg.data.slice(15);
    let lang = msg.data.slice(15);
    if (lang == `en`) {
        lang = locale.en
    }
    if (lang == `es`) {
        lang = locale.es
    }
    if (lang == `pt`) {
        lang = locale.pt
    }
    if (lang == `fa`) {
        lang = locale.fa
    }
    if (lang == `en`) {
        lang = locale.ar
    }
    if (lang == `es`) {
        lang = locale.it
    }
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `banhammer_help_${langCode}`) {
        bot.editMessageText(`${lang.banhammerinfo}`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: [[{
                    text: `🔙`,
                    callback_data: `recycle_help_${langCode}`
                }]]
            }
        })
    }
});

bot.on('callback_query', msg => {
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `recycle_start`) {
        bot.editMessageText(`*Select Language*`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: startKeyboard
            }
        })
    }
});

bot.on('callback_query', msg => {
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `recycle_help`) {
        bot.editMessageText(`*Select Language*`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: helpKeyboard
            }
        })
    }
});

bot.on('callback_query', msg => {
    let langCode = msg.data.slice(13);
    let lang = msg.data.slice(13);
    if (lang == `en`) {
        lang = locale.en
    }
    if (lang == `es`) {
        lang = locale.es
    }
    if (lang == `pt`) {
        lang = locale.pt
    }
    if (lang == `fa`) {
        lang = locale.fa
    }
    if (lang == `en`) {
        lang = locale.ar
    }
    if (lang == `es`) {
        lang = locale.it
    }
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `recycle_help_${langCode}`) {
        bot.editMessageText(`*Help Menu*`, {
            parse_mode: 'Markdown',
            message_id: msg.message.message_id,
            chat_id: msg.message.chat.id,
            reply_markup: {
                inline_keyboard: [[{
                    text: `🔨 ${lang.banhammer_help}`,
                    callback_data: `banhammer_help_${langCode}`
                }, {
                    text: `🔰 ${lang.superuser_help}`,
                    callback_data: `superuser_help_${langCode}`
                }], [{
                    text: `🛃 ${lang.globaladmin_help}`,
                    callback_data: `globaladmin_help_${langCode}`
                }, {
                    text: `👥 ${lang.ingroup_help}`,
                    callback_data: `ingroup_help_${langCode}`
                }], [{
                    text: `ℹ️️ ${lang.about_help}`,
                    callback_data: `about_help_${langCode}`
                }, {
                    text: `👍 ${lang.credits_help}`,
                    callback_data: `credits_help_${langCode}`
                }], [{
                    text: `🔙`,
                    callback_data: `recycle_help`
                }]]
            }
        })
    }
});