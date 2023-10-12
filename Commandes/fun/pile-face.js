const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "pile-face",
    description: "Pile ou Face ?",
    utilisation: "",
    alias: ["pf", "pile-face", "pileface"],
    permission: "",
    category: "4) Fun",
    cooldown: 5,
    async run(bot, message, args, db) {

    let replies = ["Pile", "Face", "Pile", "Face", "Pile", "Face"]

    let res = Math.floor(Math.random() * replies.length);
    

    message.reply(`Le **Résulat** est: || \`\`${replies[res]}\`\` ||`)
    console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!pile-face sûr '${message.guild.name}'`))
   

}});
