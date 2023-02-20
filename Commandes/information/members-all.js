const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "member-all",
    description: "Savoir le nombre total de membre ",
    utilisation: "",
    alias: ["member-all","members-all"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {
message.reply(`Le bot surveille __**${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} membres !**__ `)
    }
})