const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "member",
    description: "Savoir le nombre de membres sur le serveur",
    utilisation: "",
    alias: ["member","members","mc","m"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
      message.reply({content : `Nous sommes __**${message.guild.memberCount}**__ sur le __serveurs !__  \n\n **Merci à vous !** `})
        console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!member sûr '${message.guild.name}'`))
    }
})