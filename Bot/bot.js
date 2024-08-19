const { Telegraf } = require("telegraf");
const TOKEN = "#token";
const bot = new Telegraf(TOKEN);

const web_link = "#web_site";

bot.start((ctx) =>
  ctx.reply("Привет :))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
