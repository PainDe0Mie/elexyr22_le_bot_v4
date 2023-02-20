const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "channel-name",
    description: "Permet de voir le nom d'un salon",
    utilisation: "",
    alias: ["channel-name","name"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
    
    message.delete()

    message.repy(`${message.channel.name}`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))


    }})