const Discord = require("discord.js");
const Event = require("../../Structure/Event");
const ms = require("ms");

module.exports = new Event("messageCreate", async (bot, message, guild) => {
  if(message.author.bot || message.system) return;
  if(!message.guild.id === "1119722075737817108") return
  
    const mentions = message.mentions.users;

    if (mentions.has("1088442920530620477") && !message.reference) {
      message.reply("Il est interdit de **ping Elexyr** dans un ticket, vous avez été mute `10 secondes` !");
        await message.guild.members.cache.get(message.author.id).timeout(ms("10s"), "Ping mon chef")
    }})
