
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "8ball",
    description: "Pose une question ?",
    utilisation: "",
    alias: ["8ball"],
    permission: "",
    category: "4) Fun",
    cooldown: 5,
    async run(bot, message, args, db) {

    let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non"];
    let res = Math.floor(Math.random() * replies.length);
	message.reply(`La réponse est : || ${replies[res]} ! ||`)
   

}});