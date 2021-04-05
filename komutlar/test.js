exports.run = async(client, message, args) => {
message.reply("pong " + client.ws.ping)
}
exports.conf = {
enabled: true,
guildonly: false,
aliases: [],
permlevel: 0,
kategori:"genel"
}
exports.help = {
name: 'ping',
description: '',
usage: ''
}