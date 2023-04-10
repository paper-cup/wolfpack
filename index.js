// Подключаем API.
const TelegramBot = require('node-telegram-bot-api');

// Подключаем токен бота.
const token = '6244052252:AAFR9SF4jiOZkGvM5X2wbZ07XjuNoBL0OXI';

// Запуск бота.
const bot = new TelegramBot(token, {polling: true});

// Реакция на пидорбота в штанах.
bot.on('message', (msg)=> {
    const chatId = msg.chat.id;
    // Вычисляем пидорбота
    const isBotInPants = msg.from.username === "InYourPantsBot"
    if (msg.text === 'бот') {
        bot.sendMessage(chatId, 'Каждый выбирает сам — быть частью волчьей стаи или стать для них кормом.')
    }

    if (isBotInPants) {
        bot.sendMessage(chatId, 'Слышь, браток, не мороси')
    }

    //Триггер на пацанские цитаты.
    const isDude = msg.text.includes('пацан')
    if (isDude) {
        bot.sendMessage(chatId, 'Я — молодой, дерзкий и дикий, словно волк.')
    }
})
