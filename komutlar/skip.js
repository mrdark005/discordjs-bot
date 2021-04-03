exports.run = async(client, msg, args) => {
    if(!client.player.isPlaying(msg)) return client.errorMessage(msg.channel.id, "Şu anda çalınan şarkı yok.");
    let song  = await client.player.skip(msg);
     return msg.channel.send(`${song.name} atlandı!`);
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: ["skip"],
    permlevel: 0,
    onyVoice:true
}
exports.help = {
    name: 'geç',
    description: '',
    usage: ''
}