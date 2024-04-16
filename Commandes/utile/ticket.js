const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "ticket",
    description: "Permet d'envoyer l'embed des tickets",
    utilisation: "",
    alias: ["ticket", "t"],
    permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {

	let Embed1 = new Discord.MessageEmbed()
    	.setColor(bot.color)
        .setTitle("Contacter le Staff")
        .setDescription(`Pour créer un ticket réagir avec : 📩`)
        .setTimestamp()
        .setFooter({text: `${bot.user.username}`, iconURL: bot.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })})

        const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
        .setStyle("PRIMARY")
        .setLabel("Clic pour ouvrir un Ticket")
        .setEmoji("📩")
        .setCustomId("ticket"))

        message.author ? await message.delete() : await message.deferReply() && await message.deleteReply();
        await message.channel.send({embeds: [Embed1], components: [btn]})
        console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!ticket sûr '${message.guild.name}'`))
    }
})
