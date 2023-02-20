const Discord = require("discord.js")
const Command = require("../../Structure/Command")

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


    }})