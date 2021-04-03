 
exports.run = async(client, msg, args) => {
    if(!client.player.isPlaying(msg)) return client.errorMessage(msg.channel.id, "Şu anda çalınan şarkı yok.");
    const volume = args[0]
    if(isNaN(volume)) return client.errorMessage(msg.channel.id, 'lütfen sayı giriniz');
    if(volume > 100) return client.errorMessage(msg.channel.id, 'lütfen 1 ve 100 arasi sayı giriniz')
    client.player.setVolume(msg, volume);
    return msg.channel.send(`Ses seviyesi ${volume} olarak ayarlandı`);
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: ["valume"],
    permlevel: 0,
    onyVoice:true
}
exports.help = {
    name: 'ses',
    description: '',
    usage: ''
}