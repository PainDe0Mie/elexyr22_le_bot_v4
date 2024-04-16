const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "uptime",
    description: "Uptime du bot",
    utilisation: "",
    alias: ["uptime", "status"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {

        const row1 = new Discord.MessageActionRow().addComponents(
        new MessageButton()
        .setURL("https://stats.uptimerobot.com/3qZjBs77nx")
        .setLabel('> Lien <')
        .setEmoji("🟢")
        .setStyle('LINK'),)

      let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Uptime :")
      .setDescription("Combien de temps **le bot** est __connecté ?__")
      .setFooter("© 2020 - 2025 Elexyr22, Tous droits réservés")
      message.reply({embeds: [embed], components: [row1]})
      console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!uptime sûr '${message.guild.name}'`))
    }
})
