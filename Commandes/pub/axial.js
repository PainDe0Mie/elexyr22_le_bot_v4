const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "axial-host",
    description: "Héberge ton projet sur un service de qualité !",
    utilisation: "",
    alias: ["axial-host", "vps", "axial", "axialhost"],
    permission: "",
    category: "Partenariat",
    cooldown: 5,

    async run(bot, message, guild) {

        const row1 = new MessageActionRow().addComponents(
        new MessageButton()
        .setURL("https://my.axial-host.fr/aff.php?aff=3")
        .setLabel('Site')
        .setEmoji("🚀")
        .setStyle('LINK'),

        new MessageButton()
        .setURL("https://discord.com/invite/pKd54F74Ff")
        .setLabel('Discord')
        .setEmoji("❤")
        .setStyle('LINK'),
        
        new MessageButton()
        .setURL("https://fr.trustpilot.com/review/axial-host.fr")
        .setLabel('Avis')
        .setEmoji("🍭")
        .setStyle('LINK'))

       let embed = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setTitle("Axial-Host :")
      .setThumbnail("https://cdn.discordapp.com/icons/775455790164475964/631e6e1924a0c02c28e497abb04b8d93.webp")
      .setDescription("Hébergeur de **VPS / Serveur Dédié,** __support réactif !__")
      .setImage("https://cdn.discordapp.com/attachments/832408088208080966/1008016008260362301/unknown.png")
      .setFooter("Procède ça propre infrastructure physique en France")
      message.reply({ embeds: [embed], components : [row1]})
        
    }})
        
    