const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "pp-serveur",
    description: "Donne la PP du serveur",
    utilisation: "",
    alias: ["pp-server", "pp-serv", "pp-serveur"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {

    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Voici la pp de : ${message.guild.name} :`)
    .setImage(message.guild.iconURL({ dynamic: true, size: 1024 })) 
    .setTimestamp()
    .setFooter(`${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
    message.reply({embeds : [embed]})
    }})
