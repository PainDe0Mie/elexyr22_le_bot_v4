const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "youtubes",
    description: "Chaîne de Elexyr22",
    utilisation: "",
    alias: ["yts"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {
     
    
        message.reply("**Voici la Chaîne de** `Elexyr22`👑 \n\n https://www.youtube.com/c/Elexyr22")
    }})