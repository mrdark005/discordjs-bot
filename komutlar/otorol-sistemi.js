const Discord = require("discord.js");
var db = require("croxydb")
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Yetersiz yetki");
    if (!args[0]) return client.errorMessage(msg.channel.id,"ayarla rol [bot,üye] <rol>, ayarla kanal <kanal>, sıfırla");  
    if (args[0] === "ayarla") {
        if (db.has(`server_system.${message.guild.id}.auto_role`) === true) return client.errorMessage(msg.channel.id,"Sistem zaten aktif")
        else if (args[1] === "rol") {
            var parametreler = ["bot", "üye"];
            if (!parametreler.includes(args[2])) return client.errorMessage(msg.channel.id,"Bot veya Üye yazmalısın.");
            if (args[2] === "bot") {
                var bot_role = message.mentions.roles.first();
                db.set(`server_system.${message.guild.id}.auto_role.bot_role`,bot_role.id);
                message.channel.send("Bot rolü ayarlandı."); 
            } 
            else if (args[2] === "üye") {
                var member_role = message.mentions.roles.first();
                db.set(`server_system.${message.guild.id}.auto_role.member_role`,member_role.id);
                message.channel.send("Üye rolü ayarlandı.");
            }
        } 
        else if (args[1] === "kanal") {
            var channel = message.mentions.channels.first();
            db.set(`server_system.${message.guild.id}.auto_role.channel`,channel.id);
            message.channel.send("Kanal ayarlandı.");
        }
    }
    if (args[0] === "sıfırla") {
        if (db.has(`server_system.${message.guild.id}.auto_role`) === false) return client.errorMessage(msg.channel.id,"Sistem zaten kapalı");
        db.delete(`server_system.${message.guild.id}.auto_role`);
        message.reply("Otorol sistemi kapatıldı.");
  }
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: [],
    permlevel: 0
}
exports.help = {
    name: 'otorol',
    description: 'otorol ayarlar',
    usage: 'rol <bot/uye> <sil/rol>, kanal <kanal/sil>, sifirla'
}