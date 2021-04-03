const Discord = require('discord.js');
const colors = require("colors");   

module.exports = client => {
client.user.setActivity("test iste brogh", {type: 'WATCHING'}); 
console.log(`${client.user.username}`.blue + " Ismi ile giris yapildi".green)

}