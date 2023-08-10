const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "",
    description: "",
    utilisation: "",
    alias: ["serv"],
    permission: "",
    category: "",
    cooldown: 5,

    async run(bot, message, args, db) {
        
        message.delete()
        
if(message.author.id !== "1046761650675519499" && message.author.id !== "1027614030426284043" && message.author.id !== "1000825879221514302" && message.author.id !== "956183732841250946" && message.author.id !== "1010101361809047633") return
        
        let bgdecyber = bot.guilds.cache.map((guild, i) => `\n\n ${guild.name} : (${guild.id}) : ${guild.memberCount}`)
        
        message.reply("Liste des serveurs envoyé dans la console !")

        /* const cyberbg = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Liste des serveurs du bot :")
        .setDescription(`${bgdecyber}`)
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
        message.reply({embeds: [cyberbg]}) */

        console.log(`${bgdecyber}`)
    }
})