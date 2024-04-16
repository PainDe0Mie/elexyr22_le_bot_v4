const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "github",
    description: "Github du bot",
    utilisation: "",
    alias: ["github"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {

        const row1 = new Discord.MessageActionRow().addComponents(
        new MessageButton()
        .setURL("https://github.com/PainDe0Mie/elexyr22_le_bot_v2")
        .setLabel('> GITHUB <')
        .setEmoji("🤖")
        .setStyle('LINK'),)

      let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Lien du code :")
      .setDescription("Lien du **code open-souce**, mis à jour __régulièrement !__")
      .setFooter("© 2020 - 2025 Elexyr22, Tous droits réservés")
      message.reply({embeds: [embed], components: [row1]})
      console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!github sûr '${message.guild.name}'`))
    }
})g
