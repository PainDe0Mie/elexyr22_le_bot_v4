const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "leave",
    description: "leave",
    utilisation: "",
    alias: ["leave"],
    permission: "",
    category: "",
    cooldown: 0,

    async run(bot, message, args) {
        
 if(message.author.id !== "1046761650675519499") return
        
             var guildID = bot.guilds.cache.get(args[0])
             
             if(!guildID) return message.reply("*Je suis pas dessus bb...*")      
            guildID.leave()
            message.reply("Serveur quitté !")
        
    }
})