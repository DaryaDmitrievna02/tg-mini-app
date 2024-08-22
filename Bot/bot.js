
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "key";
const bot = new TelegramBot(TOKEN, { polling: true });

const web_link = "linkapp/";


bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const options = {
      reply_markup: {
          inline_keyboard: [
              [{ text: "Запустить приложение", web_app: { url: web_link } }]
          ]
      }
  };

  bot.sendMessage(chatId, "Нажми на кнопку ниже, чтобы запустить приложение:", options);
});

bot.startPolling();
