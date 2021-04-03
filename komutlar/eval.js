const Discord = require("discord.js");
var db = require("croxydb")
const moment = require("moment")
exports.run = async (client, message, args) => {
    if(message.author.id !== "699203703164633120") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"js"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ev"],
  permLevel: 4
};

exports.help = {
  name: "eval",
  description: "Kod denemek için kullanılır.",
  usage: "=eval"
};

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
  function exit() {
    process.exit()
  }