const Discord = require("discord.js")
const chalk = require("chalk")
const Event = require("../../Structure/Event");

module.exports = new Event("messageCreate", async (bot, message, guild) => {
    if(message.author.bot) return;

    const member = message.author

//console.log(`[NEW MESSAGE :] ${member.username}  à envoyé le message "${message.content}" dans le channel : < ${message.channel.name} > sûr le serveur '${message.guild.name}'`)
  console.log(chalk.cyan(`[NEW MESSAGE :] ${member.username}  à envoyé le message "${message.content}" dans le channel : < ${message.channel.name} > sûr le serveur '${message.guild.name}' (${message.guildId})`))  
    
})