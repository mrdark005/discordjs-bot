const dc = require("discord.js");

exports.run = async(client, msg, args) => {
    var Genel = "";
    var Kurucu = "";
    var Yetkili = "";
    var müzik = "";
    client.commands.forEach(command => {
        switch(command.conf.kategori){
            case "genel":
                Genel += command.help.name + ", ";
                break;
            case "kurucu":
                Kurucu += command.help.name + ", ";
                break;
            case "yetkili":
                Yetkili += command.help.name + ", ";
                break;
            case "müzik":
                müzik += command.help.name + ", "
                break;
            }
        });
   var embed = new dc.MessageEmbed();
   embed.setDescription(`Komutlarim`)
   embed.setThumbnail(client.user.avatarURL()) 
   embed.addField(`Yetkili Komutlari `, `${Yetkili}`,   true)
   embed.addField(`Genel Komutlar `, `${Genel}`,   true)
   embed.addField(`Kurucu Komutlari `, `${Yetkili}`,   true)
   embed.addField(`Müzik Komutlari `, `${müzik}`,   true)
   embed.setFooter(`Komut Listesini Isteyen: ${msg.author.tag}`, msg.author.avatarURL())  
   msg.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: ["h","help"],
    permlevel: 0,
    kategori:"genel"
}
exports.help = {
    name: 'yardım',
    description: '',
    usage: '',
}