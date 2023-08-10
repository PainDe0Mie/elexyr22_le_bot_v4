 const Discord = require("discord.js")
const Event = require("../../Structure/Event");
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { token } = require("../../config")

module.exports = new Event("guildDelete", async (bot, guild) => {
    
 /*  console.log(`Leave serveur : ${guild.name} je suis à  ${bot.guilds.size} serv !`)

  const channel = bot.channels.cache.get("ID SALON") 
  let removeembed = new Discord.MessageEmbed()
    .setTitle(`Leave de ${guild.name} *(${guild.id})*`)
    .setThumbnail(guild.iconURL())
    .addField(`👑 Propriétaire:`, `<@${guild.ownerId}> *(${guild.ownerId})*`)
    .addField(` Nombre de membres:`, `${guild.memberCount}`)
    .setColor(`fc3d12`)
    .setFooter(`Désormais : ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL())
    channel.send({embeds : [removeembed]}) */
})

