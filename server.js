const Discord = require("discord.js");  
const colors = require("colors");   
const fs = require("fs");   
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: true,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const { Player } = require("discord-music-player");
const player = new Player(client, {
  leaveOnEmpty: true,
  leaveOnEnd: true,
  timeout: 15000,
  quality: 'high'
});

client.player = player;

var eventLoader = require('./util/eventLoader.js')
eventLoader.Events(client);
eventLoader.Methods(client);

var botClient = eventLoader.botClient(client);

client.errorMessage = (kid,msg) => {
  botClient.errorMesssage(kid,msg)
}

const ayarlar = require("./config.json")
client.settings = ayarlar;
client.commands = new Discord.Collection();
client.stop = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir(`./komutlar/`, (err, files) => {
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
  
    if (jsfiles.length <= 0) {
      console.log("Olamazz! Hiç komut dosyası bulamadım!".red);
    } else {
      if (err) {
        console.error("Hata! Bir komutun name veya aliases kısmı yok!".red);
      }
      console.log(`${jsfiles.length} komut yüklenecek.`.green);
  
      jsfiles.forEach(f => {
        let props = require(`./komutlar/${f}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
        });
        console.log(`Yüklenen komut:`.green + ` ${props.help.name}`.blue);
      });
    }
});
  
client.login(ayarlar.token)