const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "say",
    description: "Parle avec le bot",
    utilisation: "",
    alias: ["say"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
    message.delete()

    let str = args.join(" ");
    if(!str) return message.reply("Vous devez spécifier le message que je dois envoyer ! Exemple : `e!say <message>`")

    message.channel.send(args.join(" "));
        console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!say sûr '${message.guild.name}'`))
    }
})