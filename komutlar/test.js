exports.run = async(client, message, args) => {
message.reply("pong " + client.ws.ping)
}
exports.conf = {
enabled: true,
guildonly: false,
aliases: [],
permlevel: 0,
}
exports.help = {
name: 'ping',
description: '',
usage: ''
}