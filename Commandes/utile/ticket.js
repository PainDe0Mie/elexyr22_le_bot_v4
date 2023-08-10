const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "ticket",
    description: "Permet d'envoyer l'embed des tickets",
    utilisation: "",
    alias: ["ticket", "t"],
    permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
    category: "Ticket",
    cooldown: 5,

    async run(bot, message, args, db) {
        
	let Embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle("Ticket")
        .setDescription("Pour créer un ticket réagir avec : 📩")
        .setTimestamp()
        .setFooter({text: `${bot.user.username}`, iconURL: bot.user.displayAvatarURL({dynamic: true})})

        const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
        .setStyle("PRIMARY")
        .setLabel("Ouvrir un ticket")
        .setEmoji("📩")
        .setCustomId("tickets"))

        message.author ? await message.delete() : await message.deferReply() && await message.deleteReply();
        await message.channel.send({embeds: [Embed], components: [btn]})
        console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!ticket sûr '${message.guild.name}'`))
    }
})