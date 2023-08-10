const Discord = require("discord.js")
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "stat",
    description: "Nombre de serveur dû bot",
    utilisation: "",
    alias: ["stat","stats", "member-all", "members-all"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {

        const row1 = new MessageActionRow()
.addComponents(
  new MessageButton()
    .setURL(`https://discord.com/oauth2/authorize?client_id=${bot.user.id}&permissions=2146958591&scope=bot%20applications.commands`)
    .setLabel('Invite-moi')
    .setEmoji("👑")
    .setStyle('LINK'),
)
console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!stat sûr '${message.guild.name}'`))
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
       .setDescription(`Le bot est actuellement sur \`\`${bot.guilds.cache.size}\`\` serveurs et surveille \`\`${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\`\` membres !`)
       .setFooter("Merci à vous !")
       message.reply({ embeds: [embed], components : [row1]})}})
