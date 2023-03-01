 const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("guildDelete", async (bot, guild) => {

  const channel = bot.channels.cache.get("ID SALON") 
  let removeembed = new Discord.MessageEmbed()
    .setTitle(`Leave de ${guild.name} *(${guild.id})*`)
    .setThumbnail(guild.iconURL())
    .addField(`👑 Propriétaire:`, `<@${guild.ownerId}> *(${guild.ownerId})*`)
    .addField(` Nombre de membres:`, `${guild.memberCount}`)
    .setColor(`fc3d12`)
    .setFooter(`Désormais : ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL())
    channel.send({embeds : [removeembed]}) 
})

