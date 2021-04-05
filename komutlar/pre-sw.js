const Discord = require("discord.js");
var db = require("croxydb")
const moment = require("moment")
exports.run = async (client, message, args) => {
//once sadece botun sahibi kullana bilmesi icin kisa bi kod yazalim
if(message.author.id !== "699203703164633120") return message.channel.send("sahibim degilsin");

var sw 

if(!args[1]) sw = message.guild.id

if(args[1]) sw = args[0]

if(args[0] === "ekle"){
    if(db.has(`pre.${sw}`) === false){
        db.set(`pre.${sw}`,true)
        message.reply("artik bu sunucu premium")
        message.guild.owner.send("Sahibim tarafindan suncuunuza premium verildi")
        //eger premium degil ise bu kod blogu devreye girer
        return;
    }else return message.reply("sunucu zaten premium") 
}
 if(args[0] === "kaldir"){
    if(db.has(`pre.${sw}`) === true){
        db.delete(`pre.${sw}`)
        message.reply("artik bu sunucu premium degil")
        message.guild.owner.send("Sahibim tarafindan suncuunuzdan premium alindi")
        return
    }else return message.reply("sunucu zaten premium degil") 
} }
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: [],
    permlevel: 0,
    kategori:"kurucu"
}
exports.help = {
    name: 'premium-ekle',
    description: 'otorol ayarlar',
    usage: 'rol <bot/uye> <sil/rol>, kanal <kanal/sil>, sifirla'
}