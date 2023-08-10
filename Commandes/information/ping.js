const Discord = require("discord.js")
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "ping",
    description: "Permet de connaître la latence du bot",
    utilisation: "",
    alias: ["ping", "p"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message) {

const row1 = new Discord.MessageActionRow().addComponents(
new MessageButton()
.setURL("https://status.watchbot.app/bot/1013135812545753119")
.setLabel('> Uptime <')
.setEmoji("🟢")
.setStyle('LINK'),)

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`🏓 Mon ping est de : **${bot.ws.ping} ms !**`)
.setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
message.reply({embeds: [embed], components: [row1]})
console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!ping sûr '${message.guild.name}'`))
}})