const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "nord-vpn",
    description: "Héberge ton projet sur un service de qualité !",
    utilisation: "",
    alias: ["nord-vpn", "nordvpn", "vpn"],
    permission: "",
    category: "Partenariat",
    cooldown: 5,

    async run(bot, message, guild) {

        const row1 = new MessageActionRow().addComponents(
        new MessageButton()
        .setURL("https://go.nordvpn.net/aff_c?offer_id=612&aff_id=71951&url_id=14830")
        .setLabel('Achat')
        .setEmoji("🗻")
        .setStyle('LINK'),
        
        new MessageButton()
        .setURL("https://www.youtube.com/watch?v=Z2FWmm3ZjCg")
        .setLabel('Présenation Vidéo')
        .setEmoji("🎥")
        .setStyle('LINK'))
        
       let embed = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setTitle("Nord-VPN :")
      .setThumbnail("https://cdn.discordapp.com/emojis/993530583722512520.webp?size=96&quality=lossless")
      .setDescription("__VPN__ *(Virtual Private Network)*,\n**61% de réduction** avec le code : `Elexyr22` !")
      .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
      message.reply({ embeds: [embed], components : [row1]})
        
    }})
        
    