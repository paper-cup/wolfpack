const { Telegraf } = require('telegraf')
const { Octokit } = require('@octokit/core')
// Подключаем токен бота.
const token = '6244052252:AAFR9SF4jiOZkGvM5X2wbZ07XjuNoBL0OXI';
const authToken = 'Nr0qP0T9YOxTM9BQv+duKHe0wKcY59yd7lOQ6j87USs='

// Octokit.js
// https://github.com/octokit/core.js#readme
const wolf = new Octokit({
    auth: authToken
  })
  
await wolf.request('GET /app/hook/config', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

// Покдлючение модулей.
const { GONDON_BOT, CALL_BROTHER, QUOTES, HELP } = require('./constants')
const { QuoteRandom, random } = require('./quote_random')

// Запускаем бота.
const bot = new Telegraf(token)

// Помощь.
bot.help((ctx) => ctx.reply(HELP))

// Бот слушает брата.
bot.hears(CALL_BROTHER, (ctx) => {
    const ramdomNumber = random(QUOTES)
    const message = QUOTES[ramdomNumber]

    ctx.reply(message)
})

// Команда позвать брата
bot.command('позвать брата', (ctx) => {
    const message = QuoteRandom()
    ctx.reply(message)

})

// Бот реагирует на пидорбота.
bot.on('text', (ctx) => {
    const isShowdowns = ctx.message.reply_to_message?.from.username === GONDON_BOT
    const message = QuoteRandom()
    
    if(isShowdowns) {
        ctx.reply(message)
    }
})


bot.launch()