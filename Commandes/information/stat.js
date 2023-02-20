const Discord = require("discord.js")
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "stat",
    description: "Nombre de serveur dû bot",
    utilisation: "",
    alias: ["stat","stats"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {

        const row1 = new MessageActionRow()
.addComponents(
  new MessageButton()
    .setURL(`https://discord.com/oauth2/authorize?client_id=${bot.user.id}&permissions=2146958591&scope=bot&redirect_uri=https://discord.com/invite/elexyr22&response_type=code`)
    .setLabel('Invite-moi')
    .setEmoji("👑")
    .setStyle('LINK'),
)

        const embed = new Discord.MessageEmbed()
        .setColor('RED')
       .setDescription(`Le bot est actuellement sur\`\`${bot.guilds.cache.size}\`\` serveurs et surveille \`\`${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\`\` membres ! <a:ECoeur1:754441320759820288>`)
       .setFooter("Merci pour ceux qu'il l'ont add ! <3")
       message.reply({ embeds: [embed], components : [row1]})}})