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
    cooldown: 1,
    async run(bot, message, args, db) {

        let res = Math.random() < 0.5 ? "Pile" : "Face";

        message.reply(`Le **Résulat** est: || \`\`${res}\`\` ||`)
        console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!pile-face sur '${message.guild.name}'`))
    }
});
