const Discord = require("discord.js")

exports.run = async(client, msg, args) => {
    if(!client.player.isPlaying(msg)) client.errorMessage(msg.channel.id, "Şu anda çalınan şarkı yok.");
    let song  = await client.player.nowPlaying(msg); 
    let progressBar = client.player.createProgressBar(msg, {
        size: 25,
        block: '=',
        arrow: '>'
    });
     return msg.channel.send(new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(song.name)
        .setDescription(progressBar)
        .setThumbnail(song.thumbnail)
        .setFooter(client.user.username, client.user.avatarURL())
        )
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: ["song"],
    permlevel: 0,
    onyVoice:true,
    kategori:"müzik"
}
exports.help = {
    name: 'şarkı',
    description: '',
    usage: ''
}