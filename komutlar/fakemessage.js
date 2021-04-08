const Discord = require('discord.js');

exports.run = function (client, message, args) { 

  let yazi = args.slice(0).join(' ') || "coders code"
message.channel.createWebhook(message.author.username,{avatar:message.author.avatarURL()}).then(webhook => webhook.edit(message.author.username,{avatar:message.author.avatarURL()}).then(wb => {
     const hook = new Discord.WebhookClient(wb.id, wb.token);
  hook.send(yazi).then(h => hook.delete())
    })
  )
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: 'genel'
};

exports.help = {
    name: 'fakemesaj',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};