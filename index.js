const { Telegraf } = require('telegraf')
// Подключаем токен бота.
const token = '6244052252:AAFR9SF4jiOZkGvM5X2wbZ07XjuNoBL0OXI';

// Покдлючение модулей.
const { GONDON_BOT, CALL_BROTHER, QUOTES } = require('./constants')
const { QuoteRandom } = require('./quote_random')

// Запускаем бота.
const bot = new Telegraf(token)

// Бот слушает брата.
bot.hears(CALL_BROTHER, (ctx) => ctx.reply(QUOTES[0]))

// Бот реагирует на пидорбота.
bot.on('text', (ctx) => {
    const isShowdowns = ctx.message.reply_to_message?.from.username === GONDON_BOT
    const message = QuoteRandom()
    
    if(isShowdowns) {
        ctx.reply(message)
    }
})


bot.launch()