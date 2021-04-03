const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
    if(client.player.isPlaying(message)) {
        let song = await client.player.addToQueue(message, args.join(' '));
        if(song)
        message.channel.send(`${song.name} Sıraya Eklendi`);
        return;
    } else {
        let song = await client.player.play(message, args.join(' '));
        if(song)
             message.channel.send(`${song.name} Oynamaya başladı`);
        return;
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['play', 'çal','oynat'],
  permLevel: 3,
  onyVoice:true
};

exports.help = {
  name: 'p',
  description: 'müzik çalar',
  usage: 'çal [müzik ismi]'
};
