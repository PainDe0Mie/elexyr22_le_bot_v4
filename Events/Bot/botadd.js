const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("guildCreate", async (bot, guild) => {

    console.log(`New serveur : ${guild.name} je suis à ${bot.guilds.cache.size}  serveur !`)
    
    
      const channel = bot.channels.cache.get("")  
      let addembed = new Discord.MessageEmbed()
        .setTitle(`Join de : ${guild.name} *(${guild.id})*`)
        .setThumbnail(guild.iconURL())
        .addField(`👑 Propriétaire:`, `<@${guild.ownerId}> *(${guild.ownerId})*`)
        .addField(`Nombre de membres:`, `${guild.memberCount}`)
        .setColor("11d646")
        .setTimestamp()
        .setFooter(`Merci grâce à toi nous sommes à ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL())
      channel.send({embeds : [addembed]})
    })

