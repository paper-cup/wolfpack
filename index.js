const { Telegraf } = require('telegraf')
// Подключаем токен бота.
const token = '6244052252:AAFR9SF4jiOZkGvM5X2wbZ07XjuNoBL0OXI';

const { GONDON_BOT, CALL_BROTHER, QUOTES } = require('./constants')
const { QuoteRandom } = require('./quote_random')

const bot = new Telegraf(token)
bot.hears(CALL_BROTHER, (ctx) => ctx.reply(QUOTES[0]))
bot.on('text', (ctx) => {
    const chatId = ctx.message.chat.id
    const isShowdowns = ctx.message.reply_to_message?.from.username === GONDON_BOT
    
    if(isShowdowns) {
        ctx.reply('Слышь, браток, не мороси.')
    }
})
bot.launch()