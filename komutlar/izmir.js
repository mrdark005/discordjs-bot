const dc = require("discord.js");
const ytdl = require('ytdl-core');

exports.run = async(client, msg, args) => {
    if (message.channel.type === 'dm') return;
  
     sarkikanal.join().then(connection => {
       message.channel.send(
         new Discord.MessageEmbed()
         .setColor('#0099ff')
         .setTitle('İzmir Marşı çalınıyor')
         .setAuthor('İzmir Marşı', 'https://media.tenor.com/images/02274f830c62a5af556b7aa520215a0a/tenor.gif', 'https://discord.js.org')
         .setDescription('İzmir Marşı çalınıyor')
 .setThumbnail('https://media.tenor.com/images/02274f830c62a5af556b7aa520215a0a/tenor.gif')
       )
       const coderscode= ytdl('https://www.youtube.com/watch?v=jKsr6L99ZLA', { filter: 'audioonly' });
       const codecoders = connection.play(coderscode);
       codecoders.on('finish', () => sarkikanal.leave());
  });
}
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: ["h","help"],
    permlevel: 0,
    kategori:"müzik",
    onyVoice:true
}
exports.help = {
    name: 'yardım',
    description: '',
    usage: '',
}