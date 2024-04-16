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

console.log(chalk.yellow(`[CMD] "${message.author.username}"" à utilisé la commande e!close sûr '${message.guild.name}'`))
if(message.guild.id !== "ID") return; //ID de la guild
const salon = bot.channels.cache.get("ID")
salon.send(` ${message.author.username} à utilisé la commande **e!close.** `)}})
