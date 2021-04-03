const Discord = require("discord.js");
var db = require("croxydb")
const moment = require("moment")
exports.run = async (client, message, args) => {
//

}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: [],
    permlevel: 0
}
exports.help = {
    name: 'otorol',
    description: 'otorol ayarlar',
    usage: 'rol <bot/uye> <sil/rol>, kanal <kanal/sil>, sifirla'
}