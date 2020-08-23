const discord = require("discord.js");
const ytdl = require("ytdl-core");
module.exports.run = async (bot, message, args) => {

  if (!message.member.voice.channel) return message.reply("connecteer met een spaak kannaal");

  if (!message.guild.me.voice.channel) return message.channel.send("de bot is niet verbonden spaak kannaal");

  if (message.guild.me.voice.channelID == message.member.guild.voice.channelID){
      message.guild.me.voice.channel.leave();
}

}
module.exports.help = {
  name: "leave",
  description: "laat muziek spelen",
  category: "algemeen"
}