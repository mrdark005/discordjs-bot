exports.run = async(client, msg, args) => {
    if(!client.player.isPlaying(msg)) return client.errorMessage(msg.channel.id, "Şu anda çalınan şarkı yok     ");
    if(client.stop.get(msg.guild.id) === "durduruldu") return client.errorMessage(msg.channel.id,"Şarkı zaten durduruldu.");
    await client.player.pause(msg);
    client.stop.set(msg.guild.id, "durduruldu")
    return msg.channel.send('Oynatma duraklatıldı.');
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: [],
    permlevel: 0,
    onyVoice:true,
    kategori:"müzik"
}
exports.help = {
    name: 'duraklat',
    description: '',
    usage: ''
}