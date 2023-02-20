
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "pile-face",
    description: "Pile ou Face ?",
    utilisation: "",
    alias: ["pf", "pile-face", "pileface"],
    permission: "",
    category: "4) Fun",
    cooldown: 5,
    async run(bot, message, args, db) {

    let replies = ["Pile", "Face"];

    let res = Math.floor(Math.random() * replies.length);
    

    message.reply(`La réponse est : || **${replies[res]} !** ||`)
   

}});