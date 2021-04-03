exports.run = async(client, msg, args) => {
    if(!client.player.isPlaying(msg)) client.errorMessage(msg.channel.id, "Şu anda çalınan şarkı yok.");
    if(client.stop.get(msg.guild.id) === "devamediyor") return client.errorMessage(msg.channel.id,"Şarkı zaten devam ediyor.");
    await client.player.resume(msg);
    client.stop.set(msg.guild.id,"devamediyor")
     return msg.channel.send('Oynatma devam ediyor ');
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: [],
    permlevel: 0,
    onyVoice:true
}
exports.help = {
    name: 'devam',
    description: '',
    usage: ''
}