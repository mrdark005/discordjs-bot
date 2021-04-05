 
exports.run = async(client, msg, args) => {
    if(!client.player.isPlaying(msg)) return client.errorMessage(msg.channel.id, "Şu anda çalınan şarkı yok.");
    if(!args[0]) return client.errorMessage(msg.channel.id,'`evet` veya `hayır` yazmalısınız');
    switch(args[0]){
        case 'evet':
        case 'true':
        case 'on':
            client.player.setRepeatMode(msg, true);
            return msg.channel.send("Döngü etkinleştirildi`")
            break;
        case 'hayır':
        case 'false':
        case 'off':
            client.player.setRepeatMode(msg, false);
            return msg.channel.send("döngü devre dışı bırakılacak şekilde ayarlandı")
            break;
        default:
            return  client.errorMessage(msg.channel.id,'`evet` veya `hayır` yazmalısınız')
    }
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: ["loop"],
    permlevel: 0,
    onyVoice:true,
    kategori:"müzik"
}
exports.help = {
    name: 'döngü',
    description: '',
    usage: ''
}