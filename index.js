console.log("Ready!")

function getRandom(length) {
  return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));}
const mineflayer = require('mineflayer');
const Discord = require('discord.js');
const client = new Discord.Client();
//+config
const host = "batray.aternos.host" // айпи
//const m = "!СЛАВА АУЕКРАФТУ"
//-config
const nicks = [
  "ayftatr",
  "akjwdklajwr",
  "qweqwgesfasafqwe",
  "qwgegqwe",
  "kasjdkad",
  "127481725",
  "aasdghqwe124",
  "1u4cu124c5",
  "zmorlgayqwrwre",
  "1hj2k43h124",
  "jhj12h41245",
  "1h25jh215",
  "j1h25jh25",
  "asd7aus15",
  "asfkjh125",
  "kq2h415",
  "kawkr124",
  "kaktigay1256",
  "qklwekqwe",
  "qweqweqwetasdqt",
  "qwetytyqwe",
  "ayewfqet",
  "wrjqkwjr",
  "sajfqjwkrjwqt",
  "qwjeqkjw",
  "124718247dq" // В таком формате добавляем рандомные ники (можно с генератором.)
];

const rnick = nicks[Math.floor(Math.random() * (nicks.length - 1) + 1)]
const pass = "ayfroblox" // пароль для ботов(а)

let bot = mineflayer.createBot({
  host: host,
  port: 53102, // порт
  username: rnick,
  version: "1.12" // версия
})

bot.on("message", message => {
  console.log(message)
})

bot.on("spawn", async => {
  console.log("Ingame bot online!")
  bot.chat("/register " + pass)
  //bot.chat(m)
  let channel1 = client.channels.cache.find(channel1 => channel1.name === `nickpass`) // канал для отправки ников и пароля
  if (!channel1) return;
    setTimeout(function(){ 
  channel1.send(rnick + `:` + pass + `:` + host)
  }, 2001);
})

client.login("") // токен бота
