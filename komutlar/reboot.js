const Discord = require("discord.js");
var db = require("croxydb")
const moment = require("moment")
exports.run = async (client, message, args) => {
    if(message.author.id !== "699203703164633120") return;
    message.channel.send("timam").then(msg => client.destroy())
    .then(() => client.login(require("./../config.json").token));
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: [],
    permlevel: 0
}
exports.help = {
    name: 'reboot',
    description: '',
    usage: ''
}