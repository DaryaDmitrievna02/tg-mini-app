const { Telegraf } = require("telegraf");
const TOKEN = "7204755708:AAHcTTbe_LBu9WtNMR3dPN_itrzH6hG4ozk";
const bot = new Telegraf(TOKEN);

const web_link = "https://66c26e70b5731c0006cdc0a9--fastidious-bonbon-034523.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Привет :))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
