const { Telegraf,Telegram  } = require('telegraf')

const config = require("./config")

const telegram = new Telegram(config.token)

const bot = new Telegraf(config.token)

bot.command("start", (ctx) => {
  ctx.reply("MERHABA, SANA KURULUM KONUSUNDA YARDIM EDECEĞİM İŞTE KOMUTLARIM")
  }
            
    
            
            
console.log("BAŞARILI")
bot.launch()
