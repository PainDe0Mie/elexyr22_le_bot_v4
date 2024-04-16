const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("guildCreate", async (bot, guild, user) => {

console.log(`New serveur : ${guild.name} je suis à  ${bot.guilds.cache.size} serveur !`)
    
let serveur = guild.channels.cache.find(channel => channel.type === "GUILD_TEXT" && channel.permissionsFor(bot.user.id).has("CREATE_INSTANT_INVITE"))
if(!serveur) return;

let invite = await serveur.createInvite({ maxAge: 0, maxUses: 0 })
    
      const channel = bot.channels.cache.get("ID")  
      let addembed = new Discord.MessageEmbed()
        .setTitle(`Join de : ${guild.name} *(${guild.id})*`)
        .setThumbnail(guild.iconURL())
        .addField(`👑 Propriétaire:`, `<@${guild.ownerId}> - *(${guild.ownerId})*`)
        .addField(`Nombre de membres:`, `${guild.memberCount}`)
      	.addField(`🛬 Invitation :`, `${invite}`)
        .setColor("11d646")
        .setTimestamp()
        .setFooter(`Merci grâce à toi nous sommes à ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL())
      channel.send({embeds : [addembed]})
    })

