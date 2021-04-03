const colors = require("colors"); 
const Discord = require("discord.js");
const { Player } = require('discord-music-player');
const reqEvent = (event) => require(`../events/${event}`);
const reqMethods = (event) => require(`../events/MetHods/${event}`);
exports.Events = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
};

exports.Methods = client => {
client.on("message", reqMethods("otorol"))
};

exports.botClient = client => {
  return {
    sendMessage: (id,content)=>{
      if(!id) throw new Error("Kanal idsini bulamiyorum")
      if(!content) throw new Error("mesaji bulamiyorum")
     return client.channels.cache.get(id).send(content)
    },
    userSend: (id,content) =>{
      if(!id) throw new Error("Kullanici idsini bulamiyorum")
      if(!content) throw new Error("mesaji bulamiyorum")
     return client.users.cache.get(id).send(content)
    },
    info: (type,id) => {
      if(!type) throw new Error("Kategoriyi giriniz")
      if(!id) throw new Error("idyi giriniz")
      var info;
      if(type === "user") {
        info = client.users.fetch(id)
      }else  if(type === "guild") {
        info = client.guilds.fetch(id)
      }else  if(type === "channel") {
        info =client.channels.fetch(id)
      } else throw new Error("Kateogriyi bulamiyorum");
      return info;
    },
    errorMesssage:(channelId,errorMsg) => {
      let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Hata Çıktı!")
      .addField("**Hata**",errorMsg)
      .setTimestamp();
      client.channels.cache.get(channelId).send(embed);
    },
      };
    };