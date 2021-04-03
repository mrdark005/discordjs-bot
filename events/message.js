const ayarlar = require('../config.json');
const db = require("croxydb");
const Discord = require("discord.js") 
module.exports = async message => {
  try { 
    var client = message.client
    if (message.author.bot) return;
    if (!message.content.startsWith(ayarlar.prefix)) return;
    var command = message.content
      .split(" ")[0]
      .slice(ayarlar.prefix.length);
    var args = message.content.split(" ").slice(1);
    var cmd = "";
  
    if (client.commands.has(command)) {
      var cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      var cmd = client.commands.get(client.aliases.get(command));
    }
  
    if (cmd) {
      if (cmd.conf.permLevel === "özel") {
        //o komutu web yetkilileri kullanabsiln sadece diye yaptıgım bişe
        if (ayarlar.sahip.includes(message.author.id) === false) {
          message.channel.send("Bu komutu kullanabilmen için botun geliştiricisi olman gerek.");
          return;
        }
      }
  
      if (cmd.conf.permLevel === 1) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
          message.channel.send("Bu komutu kullanabilmen için **Mesajları Yönet** yetkinin olması gerek.");
          return;
        }
      }
      if (cmd.conf.permLevel === 2) {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
          message.channel.send("Bu komutu kullanabilmen için **Üyeleri At** yetkinin olması gerek.");
          return;
        }
      }
      if (cmd.conf.permLevel === 3) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.send("Bu komutu kullanabilmen için **Yönetici** yetkinin olması gerek.");
          return;
        }
      }
      if(cmd.conf.onlyPre === true){
        if(db.has(`pre.${sw}`) === true) {

        }else if(db.has(`pre.${sw}`) === false) return message.reply("bu komut premium sunucular icin")
      }
      if (cmd.conf.enabled === false) {
        const embed = new Discord.MessageEmbed()
          .setDescription(`Bu komut devre dışı.`)
          .setColor("GOLD")
          .setTimestamp();
        message.channel.send("Bu komut devre dışı.");
        return;
      }
      if (cmd.conf.onyVoice === true){
        const sarkikanal= message.member.voice.channel;
        if (!sarkikanal) {
         return client.errorMessage(message.channel.id,'Bu komutu kullanmak için bir ses kanalı girin!!');
        }
      }
      if (message.channel.type === "dm") {
        if (cmd.conf.guildOnly === true) {
          message.channel.send("Bu komutu özel mesajlarda kullanamazsın.");
          return;
        }
      }
      cmd.run(client, message, args);
    }
      }catch (e) {
        client.errorMessage(message.channel.id,e)
        }
};
