'use strict';

const bot = require('../core/telegram');
const locale = require('../core/locale.json');

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
}, {
    text: `🇮🇩 Bahasa Indonesia`,
    callback_data: `help_id`
}]]

const inlineKeyboard = [[{
    text: `🇬🇧 English`,
    switch_inline_query_current_chat: `help en`
}, {
    text: `🇪🇸 Español`,
    switch_inline_query_current_chat: `help es`
}], [{
    text: `🇧🇷 Português`,
    switch_inline_query_current_chat: `help pt`
}, {
    text: `فارسی 🇮🇷`,
    switch_inline_query_current_chat: `help fa`
}], [{
    text: `الرئيسية 🇸🇦`,
    switch_inline_query_current_chat: `help ar`
}, {
    text: `🇮🇹 Italiano`,
    switch_inline_query_current_chat: `help it`
}, {
    text: `🇮🇩 Bahasa Indonesia`,
    switch_inline_query_current_chat: `help id`
}]]

bot.onText(/^[\/!#]start$/, msg => {
    bot.sendMessage(msg.from.id, `*Select language:*`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: helpKeyboard
        }
    });
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
    if (lang == `ar`) {
        lang = locale.ar
    }
    if (lang == `it`) {
        lang = locale.it
    }
    if (lang == `id`) {
        lang = locale.id
    }
    bot.answerCallbackQuery(msg.id, `👍`);
    if (msg.data == `help_${langCode}`) {
        bot.editMessageText(`${lang.start}`, {
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
    if (lang == `ar`) {
        lang = locale.ar
    }
    if (lang == `it`) {
        lang = locale.it
    }
    if (lang == `id`) {
        lang = locale.id
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
    if (lang == `ar`) {
        lang = locale.ar
    }
    if (lang == `it`) {
        lang = locale.it
    }
    if (lang == `id`) {
        lang = locale.id
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
    if (lang == `ar`) {
        lang = locale.ar
    }
    if (lang == `it`) {
        lang = locale.it
    }
    if (lang == `id`) {
        lang = locale.id
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
    if (lang == `ar`) {
        lang = locale.ar
    }
    if (lang == `it`) {
        lang = locale.it
    }
    if (lang == `id`) {
        lang = locale.id
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
    if (lang == `ar`) {
        lang = locale.ar
    }
    if (lang == `it`) {
        lang = locale.it
    }
    if (lang == `id`) {
        lang = locale.id
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
    if (lang == `ar`) {
        lang = locale.ar
    }
    if (lang == `it`) {
        lang = locale.it
    }
    if (lang == `id`) {
        lang = locale.id
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

bot.on('inline_query', function(msg) {
    let langCode = msg.query.slice(5);
    let lang = msg.query.slice(5);
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
    if (lang == `ar`) {
        lang = locale.ar
    }
    if (lang == `it`) {
        lang = locale.it
    }
    if (lang == `id`) {
        lang = locale.id
    }
    let opts = [];
    if (msg.query == `help ${langCode}`) {
        opts = [
            {
                type: `article`,
                id: `${langCode}_banhammer_help`,
                title: lang.banhammer_help,
                message_text: lang.banhammerinfo,
                parse_mode: `Markdown`,
                thumb_url: `http://emojipedia-us.s3.amazonaws.com/cache/30/73/3073d8609d9e23b21f89c53f83d2dea7.png`
            },
            {
                type: `article`,
                id: `${langCode}_superuser_help`,
                title: lang.superuser_help,
                message_text: lang.superuserinfo,
                parse_mode: `Markdown`,
                thumb_url: `http://emojipedia-us.s3.amazonaws.com/cache/07/82/078231fee00b5dfdf1307cdaf8306779.png`
            },
            {
                type: `article`,
                id: `${langCode}_globaladmin_help`,
                title: lang.globaladmin_help,
                message_text: lang.globaladmininfo,
                parse_mode: `Markdown`,
                thumb_url: `http://emojipedia-us.s3.amazonaws.com/cache/03/49/03492090c0e25801a2d526c09f1ea8af.png`
            },
            {
                type: `article`,
                id: `${langCode}_ingroup_help`,
                title: lang.ingroup_help,
                message_text: lang.ingroupinfo,
                parse_mode: `Markdown`,
                thumb_url: `http://emojipedia-us.s3.amazonaws.com/cache/f3/03/f3033f43d7254a7e483c6995c60b9bf9.png`
            },
            {
                type: `article`,
                id: `${langCode}_about_help`,
                title: lang.about_help,
                message_text: lang.aboutinfo,
                parse_mode: `Markdown`,
                thumb_url: `http://emojipedia-us.s3.amazonaws.com/cache/a3/88/a3881d9895bfa74d5f8c6acea0953c3d.png`

            },
            {
                type: `article`,
                id: `${langCode}_credits_help`,
                title: lang.credits_help,
                message_text: lang.creditsinfo,
                parse_mode: `Markdown`,
                thumb_url: `http://emojipedia-us.s3.amazonaws.com/cache/51/5b/515b0cff9d179c6b7fa14d5ee54deebb.png`
            }

        ]
    } else {
        opts = [
            {
                type: `article`,
                id: `not_found`,
                title: `Help: Not Found`,
                message_text: `*Select Language:*`,
                parse_mode: `Markdown`,
                thumb_url: `http://emojipedia-us.s3.amazonaws.com/cache/fe/60/fe60e1bd45961cb128c4869269826d7f.png`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            }
        ]
    }
    bot.answerInlineQuery(msg.id, opts);
});

