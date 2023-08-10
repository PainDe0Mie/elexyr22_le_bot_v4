const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "close",
    description: "Permet de supprimé un salon",
    utilisation: "",
    alias: ["c", "close"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "1) Modération",
    cooldown: 1,

    async run(bot, message, args, db) {
        
                        message.channel.delete() 

		    console.log(chalk.yellow(`[CMD] "${message.author.tag}"" à utilisé la commande e!close sûr '${message.guild.name}'`))
            if(message.guild.id !== "1040701512298541106") return;
            const salon = bot.channels.cache.get("1084195196583018536")
            salon.send(` ${message.author.tag} à utilisé la commande **e!close.** `)}})