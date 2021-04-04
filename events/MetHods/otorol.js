module.exports = async member => {  
    const Discord = require("discord.js"),
              bot = new Discord.Client(),
              { MessageEmbed } = require("discord.js"),
              client = bot,
              db = require("croxydb"),
              ms = require('ms'),
              time = ms("5s"),
              guild = member.guild,
              members = guild.memberCount,
              {botClient} = require('./util/eventLoader.js')(bot)
    
      
      if(db.has(`server_system.${member.guild.id}.auto_role`) === false) return;
      let uye = member.guild.members.cache.size
      let role = db.get(`server_system.${member.guild.id}.auto_role.member_role`);
      let bot_role = db.get(`server_system.${member.guild.id}.auto_role.bot_role`);
      let channel = db.get(`server_system.${member.guild.id}.auto_role.channel`);
      if(!role) return;
      if(!channel) return;
      
        if(!member.user.bot) {
        member.roles.add(role)
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Mental | Otorol`)
        .setDescription(`${member.user.tag} adlı kullanıcı sunucuya katıldı ve ona ayarlanmış olan rolü verdim.`)
        .setTimestamp()
        botClient.sendMessage((channel,embed))
      } 
        
        else if(member.user.bot) {
        member.roles.add(bot_role)
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Mental | Otorol`)
        .setDescription(`<a:guvenli:775722659970940979> ${member.user.tag} adlı bot sunucuya katıldı ve ona ayarlanmış olan rolü verdim.`)
        .setTimestamp()
        botClient.sendMessage((channel,embed))
      }
    };